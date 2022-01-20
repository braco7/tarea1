import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  lista: any[] = [
    {
      lugar: "Chile",
      nombre: "Aprendiendo a programar",
      fecha: "2020-06-26T17:58:57.776Z",
      id: 1
    },
    {
      lugar: "Argentina",
      nombre: "Técnicas de programación",
      fecha: "2020-06-26T17:58:57.776Z",
      id: 2
    },
    {
      lugar: "Perú",
      nombre: "Angular para todos",
      fecha: "2020-06-26T17:58:57.776Z",
      id: 3
    },
    {
      lugar: "Chile",
      nombre: "Variables y NgModel",
      fecha: "2020-06-26T17:58:57.776Z",
      id: 4
    },
  ]

  constructor() { }



}
