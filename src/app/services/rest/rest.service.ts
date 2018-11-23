import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class RestService {
    private api: string;

    constructor(private http: HttpClient) {
        this.api = environment.api;
        console.log('this.api: ', this.api);
    }

    public get(uri: string) {
        const header = this.createHeaders();
        return this.http.get(this.api + uri, {
            headers: header
        });
    }

    private createHeaders() {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }
}
