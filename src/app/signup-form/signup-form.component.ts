import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { User } from '../user';
import { UsersHttpService } from '../users-http.service';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  myForm: FormGroup
  newUser!: User;
  constructor(private us : UsersHttpService){
    this.myForm = new FormGroup({
      name: new FormControl("User"),
      email: new FormControl("user@example.com"),
      age: new FormControl(0)
    })
  }

  handleSubmit(){
    this.myForm.value['id'] = JSON.stringify(new Date().getTime())
    this.myForm.value['active'] = false
    this.newUser = this.myForm.value
    // One User Object
    this.us.addUser(this.newUser)
    .subscribe({
      next: (res)=>console.log(res),
      error: (err)=>console.log(err)
    })
  }
}
