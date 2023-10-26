import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  isControlHasError(controlName: string, validationType: string): boolean {
    let control = this.form.controls[controlName];
    if (!control) {
      return false;
    }
    return control.hasError(validationType) && (control.dirty || control.touched);
  }
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.maxLength(15),  Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
    });
  }
  checkLogin() {
    if (this.form.valid) {
      const name = this.form.value.name;
      const password = this.form.value.password;
      const dict = {
        name:name,
        password:password
      };
      console.log(dict)

      // Enviar el nombre como objeto JSON
      this.http.post('http://0.0.0.0:8100/iniciar-sesion',dict).subscribe(
        (response) => {
          console.log('Respuesta del servidor:',response);
          if(response){console.log('conecto.......')
          this.router.navigate(['/users/bienvenida']); };
          //Realiza acciones adicionales después de enviar los datos, si es necesario
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    };
  }
}
