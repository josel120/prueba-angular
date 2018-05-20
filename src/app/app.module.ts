import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import {APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosService } from './services/servicios.service';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AutosComponent } from './components/autos/autos.component';
import { SaludComponent } from './components/salud/salud.component';
import { HogarComponent } from './components/hogar/hogar.component';

//Servicios


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    ServicioComponent,
    AutosComponent,
    SaludComponent,
    HogarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
