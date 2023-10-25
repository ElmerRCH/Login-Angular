import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TablaComponent } from './tabla/tabla.component';
import {BienvenidaComponent} from './bienvenida/bienvenida.component'

const routes: Routes = [
  {
    path: '', component: InicioComponent,
  },
  {
    path: 'users/login', component: LoginComponent
  },
  {
    path: 'users/registrar', component: RegistrarComponent
  },
  {
    path: 'users/tabla', component: TablaComponent
  },
  {
    path: 'users/bienvenida', component:BienvenidaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
