import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsListComponent } from './payments-list.component';
import { PaymentsCreateComponent } from './payments-create.component';

const routes: Routes = [
  {
    path: 'pagos',
    component: PaymentsListComponent
  },
  {
    path: 'pagos/crear',
    component: PaymentsCreateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports: [RouterModule]
})
export class PaymentsRoutingModule { }
