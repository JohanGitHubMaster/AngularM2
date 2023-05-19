import { Component } from '@angular/core';
import { User } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nom!:string;
  motdepasse!:string;
  isLogged($event:any){

  }
}
