import { IUserCreateModel } from './../models/user.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = 'http://localhost:4000';

    user!: IUserCreateModel;

    get registerUser() {
      debugger;
        return this.user;
    }

    constructor(private http: HttpClient) {}
    login(userCredentials: {phoneNumber: string; password: string}): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.url + '/user/login', userCredentials);
    }

    createUser(user:IUserCreateModel): Observable<any> {
        this.user = user;
        debugger;
        return this.http.post(this.url + '/user/create', user);
    }
}
