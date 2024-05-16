import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Func } from '../users.component';

interface User {
  id: number;
  name: String;
  email: String;
  function: String;

}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  usersList: User[] = []
  
  constructor(private router: Router) {

    this.usersList = [
      {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "function": "Engenheiro de FE",

      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob@example.com",
        "function": "Engenheiro de BE",

      },
      {
        "id": 3,
        "name": "Carol Lee",
        "email": "carol@example.com",
        "function": "Analista de dados"
      },
      {
        "id": 4,
        "name": "João Silva",
        "email": "joaosilva@example.com",
        "function": "Lider técnico"
      }
    ]
  }


  // constructor() {
  //   
  // }

  editUser() {
    console.log("Editing user: ")
    this.router.navigate(["app/users/edit"])
  }
  addUser() {
    this.router.navigate(["app/users/new"])
  }


}

