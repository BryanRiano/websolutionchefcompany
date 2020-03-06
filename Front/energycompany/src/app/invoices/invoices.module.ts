import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './invoices-list.component';
import { InvoicesCreateComponent } from './invoices-create.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { FormsModule } from '@angular/forms';
import { InvoicesCheckComponent } from './invoices-check.component';
import { InvoicesRecordComponent } from './invoices-record.component';
import { InvoicesPaymentComponent } from './invoices-payment.component';



@NgModule({
  declarations: [InvoicesListComponent, InvoicesCreateComponent, InvoicesCheckComponent, InvoicesRecordComponent, InvoicesPaymentComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule
  ]
})
export class InvoicesModule { }
