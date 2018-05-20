import { Injectable } from '@angular/core';
import { Servicios } from '../interfaces/servicios';

@Injectable()
export class ServiciosService {

  public servicios:Servicios[] = [
    {
      nombre: "Electricidad",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"hogar",
      id: 0
    },
    {
      nombre: "Auxilio Mecanico",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"auto",
      id: 1 
    },
    {
      nombre: "Chofer reemplazo",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"auto",
      id: 2 
    },
    {
      nombre: "Medico a domicilio",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"salud",
      id: 3 
    },
    {
      nombre: "Ambulancia",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"salud",
      id: 4 
    },
    {
      nombre: "Gasfitero",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
      categoria:"hogar",
      id: 5 
    }
  ];
  constructor() {
    console.log("Servicio Cargado");
  }

  getServicios():Servicios[]{
    return this.servicios;
  }
  getServicio(i:number){
    for(let ser of this.servicios){
      if (ser.id == i){
        return ser;
      }
    }
    return null;
  }
  getCategoria(categoria):Servicios[]{
    let busqueda:any[] = Array();    
    for(let valor of this.servicios){
      if(valor.categoria === categoria){
        busqueda.push(valor);
      }
    }
    return busqueda;
  }
  deletedServicio(id){
    for(let i=0; i < this.servicios.length ; i++){
      if (this.servicios[i].id == id){
        this.servicios.splice(i,1);
      }
    }
    return this.servicios;
  }
  modificarServicio(formulario){
    for(let i=0; i < this.servicios.length ; i++){
      if (this.servicios[i].id == formulario.id){
        this.servicios[i].nombre = formulario.nombre;
        this.servicios[i].descripcion = formulario.descripcion;
      }
    }
    return this.servicios;
  }

}
