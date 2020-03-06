import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientList: any = [];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  GetAllItems(): void {
    this.clientService.getAll().subscribe(
      operationResult => {
        if (operationResult.ResponseCode === 200) {
          this.clientList = operationResult;
        }
      },
      error => {}
    );
  }

}
