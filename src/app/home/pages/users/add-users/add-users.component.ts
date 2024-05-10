import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Func } from '../users.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent {
  addUserForm: FormGroup;
  func = Func;
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
        Validators.maxLength(15)]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
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
