import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list.component';
import { InvoicesCreateComponent } from './invoices-create.component';
import { InvoicesCheckComponent } from './invoices-check.component';

const routes: Routes = [
  {
    path: 'facturas',
    component: InvoicesListComponent
  },
  {
    path: 'facturas/crear',
    component: InvoicesCreateComponent
  },
  {
    path: 'facturas/check',
    component: InvoicesCheckComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports: [RouterModule]
})
export class InvoicesRoutingModule { }
