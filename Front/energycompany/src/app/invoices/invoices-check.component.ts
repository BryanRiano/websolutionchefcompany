import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoices-check',
  templateUrl: './invoices-check.component.html',
  styleUrls: ['./invoices-check.component.css']
})
export class InvoicesCheckComponent implements OnInit {

  clientList: any = [];

  constructor(private invoiceService: InvoicesService) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  /* edit(id: string) {
    this.router.navigate([`/clientes/editar/${id}`]);
  } */

  GetAllItems(): void {
    this.invoiceService.check().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
