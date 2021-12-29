import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IUserCreateModel} from "src/app/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = 'http://localhost:4000';

    constructor(private http: HttpClient) {}
    login(userCredentials: {phoneNumber: string; password: string}): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.url + '/user/login', userCredentials);
    }

    createUser(user:IUserCreateModel): Observable<any> {
      return this.http.post(this.url + '/user/create', user);

    }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(this.url + '/user/all', {
            headers: {
                'Authorization': (localStorage.getItem('token') || '')
            }
        });
    }
}
