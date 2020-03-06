import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsListComponent } from './payments-list.component';
import { PaymentsCreateComponent } from './payments-create.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaymentsListComponent, PaymentsCreateComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule
  ]
})
export class PaymentsModule { }
