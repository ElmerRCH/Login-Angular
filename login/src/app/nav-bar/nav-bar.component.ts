import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})

export class NavBarComponent {

  constructor( private router: Router){};

  iniciarSesion(){
    this.router.navigate(['/users/login']);
  }
  registrar(){
    this.router.navigate(['/users/registrar']);
  }
  mostrar(){
    this.router.navigate(['users/tabla']);
  }

}
