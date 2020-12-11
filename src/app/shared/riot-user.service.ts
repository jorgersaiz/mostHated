import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Summoner } from '../models/summoner';


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "/lol/summoner/v4/summoners/by-name/"
  private authToken = "?api_key=RGAPI-2f3f4d18-5085-4c9d-b4c2-7757ea616108"
  constructor(private http: HttpClient) { }

  getUser(name: string){
    
    return this.http.get(this.url + name + this.authToken)

  }

  
}
