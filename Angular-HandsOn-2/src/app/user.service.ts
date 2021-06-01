import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  async getUsers() :Promise<User[]>{
    let url="https://reqres.in/api/users";
    let st= await fetch(url);
    let data= await st.json();
    let details=data.data;
    console.log(details);
    return details;
  }

}
