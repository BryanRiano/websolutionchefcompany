import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  clientList: any = [];

  constructor(private paymentService: PaymentsService) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  GetAllItems(): void {
    this.paymentService.getAll().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
