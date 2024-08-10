import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {



  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var logueado: boolean = true;
      if (this.authService.token.id == undefined) {
        logueado = false;
        this.router.navigate(["./auth"]);
      }
    return logueado;
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      var logueado: boolean = true;
      if (this.authService.token.id == undefined) {
        logueado = false;
        this.router.navigate(["./auth"]);
      }
    return logueado;
  }

};
