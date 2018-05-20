import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicios } from '../../interfaces/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent implements OnInit {
  public servicios:Servicios[] = []; 
  constructor( private serviciosService:ServiciosService) { 
  }

  ngOnInit() {
    this.servicios = this.serviciosService.getServicios();
    //console.log(this.servicios);
  }

  deletedServicio(id){
    this.servicios = this.serviciosService.deletedServicio(id);
  }

  editarServicio(servicio){
    console.log(servicio);
  }
}

