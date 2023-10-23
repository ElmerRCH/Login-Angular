import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  name: FormControl = new FormControl('',[Validators.required]);

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      name: ['',Validators.required]
    })
  }

 sendName(){
  console.log(this.name.value)
 }
}
