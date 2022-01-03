import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IUserCreateModel} from "src/app/models/user.model";
import {AppConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private config: AppConfigService) {}

    login(userCredentials: {phoneNumber: string; password: string}): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.config.url + 'user/login', userCredentials, {
            headers: {
                'Authorization': localStorage.getItem('token') || ''
            }
        });
    }

    createUser(user:IUserCreateModel): Observable<any> {
      return this.http.post(this.config.url + 'user/create', user);

    }
}
