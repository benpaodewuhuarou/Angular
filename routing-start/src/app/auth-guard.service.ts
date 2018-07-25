
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private authService:AuthService,
                private router :Router){

    }

    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>|boolean{
        return this.authService.isAuthenticated()
         .then(
            (authenticated:boolean)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/'])
                }
            }
        );
    }
    canActivateChild(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>|boolean{
            return this.canActivate(route,state);
    }
}