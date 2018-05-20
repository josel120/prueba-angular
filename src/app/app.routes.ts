import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AutosComponent } from './components/autos/autos.component';
import { HogarComponent } from './components/hogar/hogar.component';
import { SaludComponent } from './components/salud/salud.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'autos', component: AutosComponent },
    { path: 'hogar', component: HogarComponent },
    { path: 'salud', component: SaludComponent },
    { path: 'servicio/:id', component: ServicioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});