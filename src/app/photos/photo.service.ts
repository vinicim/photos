import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    API = 'http://localhost:3000';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    listFromUser(userName: String) {

        return this.http.get<any[]>(this.API + '/flavio/photos'); //analogo a promises, porem mais poderoso    
        
    }
}