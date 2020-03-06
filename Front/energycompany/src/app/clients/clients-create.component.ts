import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {

  public mainObject: any = {};
  edit: boolean = false;

  constructor(private clientService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id){
      this.edit = true;
      const id = this.route.snapshot.params.id;
      this.getClient(id);
    }
  }

  getClient(id: string): void {
    this.clientService.getById(id).subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.mainObject = operationResult[0];
        /*}*/
      },
      error => {}
    );
  }

  saveElement(ObjectValue: any) {
    ObjectValue.value.id = this.mainObject['id'];
    this.clientService.Save(this.edit, ObjectValue.value).subscribe(
        operationResult => {
          console.log(operationResult);
        },
        error => {
          console.log(error);
        }
      );
  }

}
