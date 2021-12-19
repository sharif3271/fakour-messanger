import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = 'http://localhost:4000';

    constructor(private http: HttpClient) {}
    login(userCredentials: {phoneNumber: string; password: string}): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.url + '/user/login', userCredentials);
    }
}