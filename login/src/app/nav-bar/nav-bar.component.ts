import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})

export class NavBarComponent {
  linkLogin: any = 'users/login';
  link: any = 'users/registrar';
}
