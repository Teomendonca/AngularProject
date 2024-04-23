import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './home/pages/users/users.component';
import { NavBarComponent } from './home/components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { TodoListComponent } from './home/pages/todo-list/todo-list.component';
import { AddUsersComponent } from './home/pages/add-users/add-users.component';
import { EditUsersComponent } from './home/pages/edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSuperiorComponent,
    CarouselComponent,
    ListaClienteComponent,
    FooterComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    WelcomeComponent,
    UsersComponent,
    NavBarComponent,
    TodoListComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
