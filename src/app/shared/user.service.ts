import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Summoner } from '../models/summoner';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/summoners"
  private url2 = "http://localhost:3000/summoners/lobby"

  constructor(private http: HttpClient) { }

  getUserLobby(names){

    return this.http.post(this.url2, names)

  }
  getUserList(){

    return this.http.get(this.url)
  }

  postUser(user: Summoner){
    return this.http.post(this.url, user)
  }
}
