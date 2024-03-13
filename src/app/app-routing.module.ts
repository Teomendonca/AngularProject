import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { MediaComponent } from './media/media.component';
import { SeguroComponent } from './seguro/seguro.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'client-list', component: ClientListComponent },
  { path: 'media', component: MediaComponent },
  { path: 'seguro', component: SeguroComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
