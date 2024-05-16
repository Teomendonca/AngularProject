import { Component, numberAttribute } from '@angular/core';
import { Func } from '../../pages/users/users.component';
import { Router } from '@angular/router';
import { UsersListComponent } from '../../pages/users/users-list/users-list.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  func = Func;
  keys: any[]=[];

  qtd = UsersListComponent
  
  constructor(private router: Router) {

    this.keys = Object.keys(this.func).filter(Number)
    
  }
}
