import { Injectable } from "@angular/core";
import { PlatformLocation } from "@angular/common";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    jwtHelper = new JwtHelperService();

    constructor(private platformLocation: PlatformLocation) {}    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (!token || this.jwtHelper.isTokenExpired(token)) {
            // if there is no token OR the token is expired then go to login page.
            localStorage.clear();
            // window.location.href = (this.platformLocation as any).location.origin + '/login';
            return next.handle(req.clone())
        } else {
            // clone the request to add the new header.
            const headers = req.headers.set('Authorization', token);
            const authReq = req.clone({headers: headers});
            return next.handle(authReq)
        }        
    }
}