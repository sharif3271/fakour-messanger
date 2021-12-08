import { CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LandingCanActivate implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Promise<boolean|UrlTree>|boolean|UrlTree {
          const isUserLogin = false;
          if (isUserLogin) {
              return true;
          } else {
              this.router.navigate(['login']);
              return false
          }
      }
}