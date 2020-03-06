import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-create',
  templateUrl: './invoices-create.component.html',
  styleUrls: ['./invoices-create.component.css']
})
export class InvoicesCreateComponent implements OnInit {

  public mainObject: any = {};
  edit: boolean = false;

  constructor(private invoiceService: InvoicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveElement(ObjectValue: any) {
    this.invoiceService.Save(this.edit, ObjectValue.value).subscribe(
        operationResult => {
          console.log(operationResult);
        },
        error => {
          console.log(error);
        }
      );
  }

}
