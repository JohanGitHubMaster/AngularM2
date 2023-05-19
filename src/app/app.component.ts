import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cours Angular de Mr Buffa';

  constructor(private authService:AuthService){

  }

  login(){
    if(!this.authService.loggedIn){
       this.authService.logIn();
    }
    else{
      this.authService.logOut();
    }
  }

}


