import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: "1",
      name: "User",
      email: 'user@example.com',
      age: 25,
      active: true
    },
    {
      id: "2",
      name: "Another User",
      email: 'another.user@example.com',
      age: 30,
      active: false
    },
    {
      id: "3",
      name: "New User",
      email: 'new.user@example.com',
      age: 35,
      active: true
    }
  ]

  constructor() { }

  getUsers(){
    return this.users
  }

  addUser(newUser: User){
    this.users.push(newUser)
    return true
  }

  removeUser(id: string){
    let filteredUsers = this.users.filter((nextUser)=>nextUser.id!=id)
    this.users = filteredUsers
    console.log(this.users)
  }

  updateUser(userToUpdate: User){
    let updatedUsers = this.users.map(nextUser=>{
      if(nextUser.id==userToUpdate.id){
        nextUser = userToUpdate
      }
      return nextUser
    })
    this.users = updatedUsers
  }
}
