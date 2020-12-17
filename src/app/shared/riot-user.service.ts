import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-d1026fef-3651-4065-aea1-8adde563e9f4"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  
}
