import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { UsersComponent } from './home/pages/users/users.component';
import { TodoListComponent } from './home/pages/todo-list/todo-list.component';
import { EditUsersComponent } from './home/pages/users/edit-users/edit-users.component';
import { AddUsersComponent } from './home/pages/users/add-users/add-users.component';
import { UsersListComponent } from './home/pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: CadastroUsuarioComponent },
  {
    path: "app", component: HomeComponent,
    children: [
      { path: "", component: WelcomeComponent },
      {
        path: "users", component: UsersComponent,
        children: [
          { path: "", component: UsersListComponent },
          { path: "edit", component: EditUsersComponent },
          { path: "new", component: AddUsersComponent }
        ]
      },
      { path: "todo-list", component: TodoListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
