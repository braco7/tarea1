import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  users: any[] = []
  constructor(private datos: Servicio1Service) { }

  ngOnInit(): void {
    this.users = this.datos.lista
  }

  mostrar() {
    console.log(this.users)
  }

}
