import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoices-payment',
  templateUrl: './invoices-payment.component.html',
  styleUrls: ['./invoices-payment.component.css']
})
export class InvoicesPaymentComponent implements OnInit {

  clientList: any = [];

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  /* edit(id: string) {
    this.router.navigate([`/clientes/editar/${id}`]);
  } */

  GetAllItems(): void {
    this.invoiceService.payment().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
