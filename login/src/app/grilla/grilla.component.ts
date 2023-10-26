import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent {
  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      fileInput: [null, Validators.required]
    });
  }
  onFileSelected(event: any) {
    const fileInput = event.target;
    this.selectedFile = fileInput.files[0];
  }
  
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(typeof formData)
      //Enviar el nombre como objeto JSON
      this.http.post('http://0.0.0.0:8100/recibir-imagen',formData).subscribe(
        (response) => {
          console.log('Respuesta del servidor:',response);
          //Realiza acciones adicionales después de enviar los datos, si es necesario
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    };
  }
}
