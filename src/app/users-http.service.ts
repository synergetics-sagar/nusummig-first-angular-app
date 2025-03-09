import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {

  apiUrl = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl)
  }

  addUser(newUser: User){
    return this.http.post(this.apiUrl, newUser)
  }

  removeUser(id: string){
    return this.http.delete(this.apiUrl+"/"+id)
  }

  updateUser(userToUpdate: User){
    return this.http.put(this.apiUrl+"/"+userToUpdate.id, userToUpdate)
  }
}
