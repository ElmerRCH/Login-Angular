import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      olds: ['', Validators.required],
      password: ['', Validators.required],
      confi_password: ['', Validators.required],

    });
  }

  sendName() {
    if (this.form.valid) {
      const name = this.form.value.name;
      const olds = this.form.value.olds;
      const password = this.form.value.password;
      const confi_password = this.form.value.password;
      const dict = {
        name:name,
        olds:olds,
        password:password,
        confi_password:confi_password
      };
      console.log(dict)

      // Enviar el nombre como objeto JSON
      this.http.post('http://0.0.0.0:8100/registrar-usuario',dict).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realiza acciones adicionales después de enviar los datos, si es necesario
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    }
  }
}
