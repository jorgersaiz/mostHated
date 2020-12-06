import { Component, OnInit } from '@angular/core';
import { Summoner } from 'src/app/models/summoner';
import { RiotUserService } from 'src/app/shared/riot-user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public link = ""
  public user: Summoner
  public disabled: boolean = false
  public users: Summoner []
  constructor(private riotService:RiotUserService) { }


  getUser(name: string){

    this.riotService.getUser(name).subscribe((data:any)=>{
      console.log(data);
      this.link = "https://euw.op.gg/summoner/userName="
      this.user = data

      
      data.name.replace(" ", "+")
      this.link += data.name      
      this.user.nReported = 1
      
    })
  }


  postUser(){

    this.riotService.postUser(this.user).subscribe((data)=>{

      console.log(data);
      this.disabled = true
      
    })
  }

  
  ngOnInit(): void {
    this.riotService.getUsers().subscribe((data: Summoner[]) =>{

      this.users = data
      
    })
  }

}
