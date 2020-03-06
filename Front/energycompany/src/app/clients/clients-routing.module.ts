import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list.component';
import { ClientsCreateComponent } from './clients-create.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientsListComponent
  },
  {
    path: 'clientes/crear',
    component: ClientsCreateComponent
  },
  {
    path: 'clientes/editar/:id',
    component: ClientsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ClientsRoutingModule { }
