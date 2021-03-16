import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-e2215d07-43c5-44fb-bc80-eafe92a7afe3"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  
}
