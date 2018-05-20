import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../interfaces/servicios';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit {
  public servicios:Servicios[] = []; 
  constructor( private serviciosService:ServiciosService) { 
  }

  ngOnInit() {
    this.servicios = this.serviciosService.getCategoria('hogar');
    //console.log(this.servicios);
  }
  deletedServicio(id){
    this.servicios = this.serviciosService.deletedServicio(id);
  }

}
