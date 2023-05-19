import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn=false;
  loggedUser!:boolean;

  userList:User[]=[
    {
      id:1,
      nom:"Rakoto",
      password:"admin",
      roles:true,
    },
    {
      id:2,
      nom:"Rasoa",
      password:"rasoa",
      roles:false,
    },
    {
      id:3,
      nom:"Rabe",
      password:"rabe",
      roles:false,
    }
  ];
  
  getUser():Observable<User[]>{
    return of(this.userList);
  }
  
  constructor(private router:Router) { }

  logIn(){
    this.loggedIn = true;
  }

  logInUser(user:User):Observable<User|undefined>{
    const isUser = this.userList.find(x=>x.nom==user.nom && x.password==user.password);
    if(isUser){
      console.log(isUser)
      this.loggedUser = true;
      this.loggedIn = isUser.roles
      console.log(isUser.roles);
    }
    else{
      this.loggedUser = false;
    }
    
    return of(isUser);
  }

  isUser(){
    const userLogged = new Promise((resolve,reject)=>{
      resolve(this.loggedUser);
    });
    return userLogged;
  }


  logOut(){
    this.loggedIn = false;
    this.loggedUser = false;
    this.router.navigate(["/"]);
  }

  isAdmin(){
    const userAdmin = new Promise((resolve,reject)=>{
      resolve(this.loggedIn);
    });
    return userAdmin;
  }

}
