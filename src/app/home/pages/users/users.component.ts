import { Component } from '@angular/core';

export enum Func {
  "", //the ngFor was skipping the index 0
  "Engenheiro de FE",
  "Engenheiro de BE",
  "Analista de dados",
  "Lider técnico"
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


}
