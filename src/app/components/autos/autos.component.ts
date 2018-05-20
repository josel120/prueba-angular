import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../interfaces/servicios';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  public servicios:Servicios[] = []; 
  constructor( private serviciosService:ServiciosService) { 
  }

  ngOnInit() {
    this.servicios = this.serviciosService.getCategoria('auto');
    //console.log(this.servicios);
  }
  deletedServicio(id){
    this.servicios = this.serviciosService.deletedServicio(id);
  }

}
