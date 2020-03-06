import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  clientList: any = [];

  constructor(private invoiceService: InvoicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  /* edit(id: string) {
    this.router.navigate([`/clientes/editar/${id}`]);
  } */

  GetAllItems(): void {
    this.invoiceService.getAll().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }
}
