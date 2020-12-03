import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-2a24ef18-f40d-47a4-85f4-d822ed57c2fc"
  private url2 = "http://localhost:3000/summoners"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  postUser(user: Summoner){
    return this.http.post(this.url2, user)
  }
}
