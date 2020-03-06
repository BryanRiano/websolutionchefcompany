import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ClientsRoutingModule { }
