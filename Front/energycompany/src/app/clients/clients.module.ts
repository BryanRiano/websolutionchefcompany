import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsCreateComponent } from './clients-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientsListComponent, ClientsCreateComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ]
})
export class ClientsModule { }
