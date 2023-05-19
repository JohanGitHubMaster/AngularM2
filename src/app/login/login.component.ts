import { Component } from '@angular/core';
import { User } from './login.model';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nom!:string;
  motdepasse!:string;

  userSession?:User;

  constructor(private authService:AuthService,private router:Router){

  }

  isLogged(){
    let user=new User();
    user.nom=this.nom;
    user.password=this.motdepasse;
    this.authService.logInUser(user).subscribe(userbase=>{
      console.log(userbase)
      if(userbase){
        this.userSession = userbase;     
      }
      this.router.navigate(["/home"]);
    });
  }
}
