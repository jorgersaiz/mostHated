import { Component, OnInit } from '@angular/core';
import { Summoner } from 'src/app/models/summoner';
import { RiotUserService } from 'src/app/shared/riot-user.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public disabled: boolean = false
  public link = ""
  public user: Summoner
  public riotUsers: Summoner []
  public users: Summoner []
  constructor(private riotService:RiotUserService, private userService: UserService) { }


  getUser(name: string){

    this.disabled = false

    if(name.length < 17){

      this.riotService.getUser(name).subscribe((data:Summoner)=>{
        
        this.link = "https://euw.op.gg/summoner/userName="
        this.user = data
  
        
        data.name.replace(" ", "+")
        this.link += data.name      
        this.user.nReported = 1
        
      })

    } else {

      let names = name.split(/ joined the lobby/g);

      names.pop()

      for(let i = 0; i < names.length; i++){

        if(names[i][0] == " "){
          names[i] = names[i].slice(1)
        }
      }

      

      let json = {s1:names[0], s2:names[1], s3:names[2], s4:names[3], s5:names[4]}

      this.userService.getUserLobby(json).subscribe((data:Summoner []) =>{

        this.riotUsers = data
        
        this.users = null


        
        
      })
    }
  }


  postUser(){

    this.disabled = true

    this.userService.postUser(this.user).subscribe((data)=>{
      

      console.log(data);
      
    })
  }

  list(){

    this.userService.getUserList().subscribe((data: Summoner[]) =>{

      this.users = data
      
    })
  }

  
  ngOnInit(): void {
    this.list()
  }

}
