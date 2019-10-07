import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(
    private router: Router,
    
    private authenticationService: AuthService
) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const user = this.authenticationService.connectedUser;
    console.log(user);
    if (user !== null) {
        // check if route is restricted by role
        console.log(user)   
         if (route.data.roles && route.data.roles.includes(user.typeaccee)) {
           console.log(user.typeaccee);
            // role not authorised so redirect to home page
            console.log("false");
            return true;
        }
        this.router.navigate(['/']);
        // authorised so return true
        return false;

    }
    console.log("fffff");
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}
