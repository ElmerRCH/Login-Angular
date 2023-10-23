import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitRegistro() {
    if (this.registroForm.valid) {
      const datos = this.registroForm.value;
      // Aquí puedes enviar los datos del formulario al servidor para el registro
      console.log('Datos de registro:', datos);
    }
  }
  ngOnInit(): void {
      console.log('')
  }
}
