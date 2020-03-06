import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoices-record',
  templateUrl: './invoices-record.component.html',
  styleUrls: ['./invoices-record.component.css']
})
export class InvoicesRecordComponent implements OnInit {

  clientList: any = [];

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  /* edit(id: string) {
    this.router.navigate([`/clientes/editar/${id}`]);
  } */

  GetAllItems(): void {
    this.invoiceService.record().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
