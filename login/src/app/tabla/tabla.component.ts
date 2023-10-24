
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  counter: number = 0;
  usuarios: any[] = []
  @Output() userSelected: EventEmitter<any> = new EventEmitter()
  @Input() title : string = ""

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((data: any[]) => {

      this.usuarios = data.splice(0,10)
      console.log(this.usuarios )
      
    })
  }
  ping() {
    console.log("ping", this.counter++)
  }
  selectUser(user : any) {
    this.userSelected.emit(user)
  }
}
