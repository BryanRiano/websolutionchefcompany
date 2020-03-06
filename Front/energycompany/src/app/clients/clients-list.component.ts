import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientList: any = [];

  constructor(private clientService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  edit(id: string) {
    this.router.navigate([`/clientes/editar/${id}`]);
  }

  delete(id: number) {
    this.clientService.Delete(id).subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          console.log(operationResult);
          this.GetAllItems();
        /*}*/
      },
      error => {console.log(error);}
    );
  }

  GetAllItems(): void {
    this.clientService.getAll().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.clientList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
