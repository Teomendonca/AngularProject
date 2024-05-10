import { Component } from '@angular/core';
import { Func } from '../../pages/users/users.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  func = Func;
  
  constructor(private router: Router) {

    // this.keys = Object.keys(this.func).filter(Number)

  }
}
