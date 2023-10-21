import { Component } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  nombre: string = '';
  constructor(private formularioService: UsersService) {}

  enviarFormulario() {
    const data = {
      nombre: this.nombre, // Incluye más campos según tu formulario
    };

    this.formularioService.enviarFormulario(data).subscribe(response => {
      // Maneja la respuesta del servidor si es necesario
    });
  }
}
