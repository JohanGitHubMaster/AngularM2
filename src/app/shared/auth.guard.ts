import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 let router = inject(Router);
 return inject(AuthService).isAdmin().then(authentifie=>{
  if(authentifie){
    return true;
  }
  else{
    alert("vous n'etes pas Admin");
    router.navigate(["/home"]);
    return false;
  }
 });
  //si ca renvoie true on peut activer la route
  //return false;
};

export const authUserGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  return inject(AuthService).isUser().then(authentifie=>{
   if(authentifie){
     return true;
   }
   else{
     alert("vous n'etes pas User");
     router.navigate(["/"]);
     return false;
   }
  });
   //si ca renvoie true on peut activer la route
   //return false;
 };
