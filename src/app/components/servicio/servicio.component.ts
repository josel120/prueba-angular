
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html'
})
export class ServicioComponent {
  public sevicio:any = {};
  constructor( private activateRoute: ActivatedRoute,
                private serviciosService: ServiciosService) {
                  this.activateRoute.params.subscribe(params => {
                    this.sevicio = this.serviciosService.getServicio( params['id']);
                  });

   }
   modificarServicio(formulario:NgForm){
     this.serviciosService.modificarServicio(formulario.value);
   }

}
