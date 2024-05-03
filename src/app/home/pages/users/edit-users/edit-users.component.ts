import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Func } from '../users.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent {
  addUserForm: FormGroup;
  func = Func
  keys: any[];
  constructor(private router: Router) {

    this.keys = Object.keys(this.func).filter(Number);

    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',
        [Validators.required,
        Validators.email]),
      func: new FormControl('', Validators.required),
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

  onSubmit(){
    console.log("Usuário criado com sucesso")
    console.log(this.addUserForm.value);
    this.router.navigate(['app/users'])
  }
  cancel(){
    this.router.navigate(['app/users'])
  }
}
