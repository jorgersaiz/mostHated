import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-8484df30-4cca-4139-a748-18617d01e109"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  
}
