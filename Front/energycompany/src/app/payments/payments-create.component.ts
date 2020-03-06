import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payments-create',
  templateUrl: './payments-create.component.html',
  styleUrls: ['./payments-create.component.css']
})
export class PaymentsCreateComponent implements OnInit {

  public mainObject: any = {};
  edit: boolean = false;

  constructor(private paymentService: PaymentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveElement(ObjectValue: any) {
    this.paymentService.Save(this.edit, ObjectValue.value).subscribe(
        operationResult => {
          console.log(operationResult);
        },
        error => {
          console.log(error);
        }
      );
  }

}
