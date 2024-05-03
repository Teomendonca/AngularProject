import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent {
  addUserForm: FormGroup;
  constructor(private router: Router) {
    
    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',
        [Validators.required,
        Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    })
  }
}
