import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    listFromUser(userName: String) {

        return this.http.get<Photo[]>(API + '/' +userName + '/photos'); //analogo a promises, porem mais poderoso    
        
    }
}