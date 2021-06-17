import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RiotUserService {

  private url = "https://most-hated-api.herokuapp.com/riot/user"
  constructor(private http: HttpClient) { }

  getUser(name: string, loc: string){

    console.log(`${this.url}?name=${name}&loc=${loc}`);
    
    
    return this.http.get(`${this.url}?name=${name}&loc=${loc}`)
  }
}
