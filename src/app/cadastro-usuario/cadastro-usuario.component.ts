import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  signupForm: FormGroup;
  constructor(private router: Router) {

    this.signupForm = new FormGroup({
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
  onSubmit() {
    console.log("New user sucessfully added!")
    console.log(this.signupForm.value);

    this.router.navigate(["/"])
  }


}
