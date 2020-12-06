import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-4d95d86f-6989-40d1-8cbe-ecb8310482ab"
  private url2 = "http://localhost:3000/summoners"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  getUsers(){

    return this.http.get(this.url2)
  }

  postUser(user: Summoner){
    return this.http.post(this.url2, user)
  }
}
