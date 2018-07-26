import {Observable} from 'rxjs/Observable'
import { CanDeactivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

export interface CanComponentDeactivate{
    canDeactivate:()=>Observable<boolean> |Promise<boolean> |boolean;

    
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate,
    currentRoute:ActivatedRouteSnapshot,
    currentSatte: RouterStateSnapshot,
    nextState?:RouterStateSnapshot):Observable<boolean> |Promise<boolean> |boolean{
        return component.canDeactivate();
    }
}