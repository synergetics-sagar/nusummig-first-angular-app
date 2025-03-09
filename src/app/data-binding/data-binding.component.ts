import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersHttpService } from '../users-http.service';

@Component({
  selector: 'app-data-binding',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  updateFormVisible: boolean = false
  heading:string = "Data Binding Demo"
  myForm: FormGroup
  // users:string[] = ["User", "Another User", "New User"] // Iterable
  userToUpdate: User ={
    id: '',
    name: '',
    email: '',
    age: 0,
    active: false
  }
  usersCopy: User[] = []

  constructor(private us: UsersHttpService){
    this.fetchUsers()
    this.myForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      age: new FormControl(0),
      active: new FormControl(false)
    })
  }

  fetchUsers(){
    this.us.getUsers().subscribe({
      next: (res:any)=>this.usersCopy=res,
      error: (err)=>console.log(err),
      complete: ()=>console.log("Http Request Completed")
    })
  }

  initUpdate(user: User){
    this.updateFormVisible = true
    this.myForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name),
      email: new FormControl(user.email),
      age: new FormControl(user.age),
      active: new FormControl(user.active)
    })
  }

  handleSubmit(){
    this.userToUpdate = this.myForm.value
    this.us.updateUser(this.userToUpdate)
    .subscribe({
      next: (res)=>this.fetchUsers(),
      error: (error)=>console.log(error)
    })

  }

  handleDelete(id: string){
    this.us.removeUser(id)
    .subscribe({
      next: (res)=>this.fetchUsers(),
      error: (err)=>console.log(err)
    })
  }
}
