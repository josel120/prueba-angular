import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private serviciosService:ServiciosService) { }

  ngOnInit() {

  }
  
  buscar(categoria:string){
    this.serviciosService.getCategoria(categoria);
  }

}
