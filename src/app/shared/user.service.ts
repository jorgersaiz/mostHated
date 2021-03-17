import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Summoner } from '../models/summoner';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://most-hated-api.herokuapp.com/summoners"

  constructor(private http: HttpClient) { }

  getUserLobby(names){

    return this.http.post(`${this.url}/lobby`, names)

  }
  getUserList(){

    return this.http.get(this.url)
  }

  postUser(user: Summoner){
    return this.http.post(this.url, user)
  }
}
