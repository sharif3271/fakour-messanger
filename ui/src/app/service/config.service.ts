import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AppConfigService {

    url!: string;

    constructor(private http: HttpClient) {}
    loadAppConfig(): () => Promise<void> {
        return () => new Promise((resolve) => {
            this.http.get<{origin: string}>('/assets/data/urls.json').subscribe({
                next: (res) => {
                    this.url = res.origin;
                    resolve();
                },
                error: () => {
                    console.log('error on config service line 19')
                    resolve();
                }
            })
        })
    }
}