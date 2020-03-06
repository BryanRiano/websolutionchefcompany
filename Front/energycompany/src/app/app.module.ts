import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';
import { routingApplication, applicationRoutingProvider } from './app.routing';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InvoicesModule } from './invoices/invoices.module';
import { PaymentsModule } from './payments/payments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientsModule,
    routingApplication,
    HomeModule,
    HttpClientModule,
    FormsModule,
    InvoicesModule,
    PaymentsModule
  ],
  providers: [applicationRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
