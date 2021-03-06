import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IUserCreateModel} from "src/app/models/user.model";
import {AppConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user!: IUserCreateModel;

    get registerUser() {
        return this.user;
    }

    constructor(private http: HttpClient, private config: AppConfigService) {}

    login(userCredentials: {phoneNumber: string; password: string}): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.config.url + 'user/login', userCredentials);
    }

    createUser(user:IUserCreateModel): Observable<any> {
      this.user = user;
      return this.http.post(this.config.url + 'user/create', user);
    }

    setPassword(setPass: any): Observable<any> {
        return this.http.post(this.config.url + 'user/set-password', setPass);
    }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(this.config.url + 'user/all');
    }
}
