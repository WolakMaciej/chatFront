import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserCredential} from './domain/UserCredential';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8488';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  userRegister(user: UserCredential): Observable<any>{
    return this.httpClient.post(`${BASE_URL}/register`, JSON.stringify(user), HTTP_OPTIONS);
  }

  userLogin(user: UserCredential): Observable<any>{
    return this.httpClient.post(`${BASE_URL}/login`, JSON.stringify(user), HTTP_OPTIONS);
  }


}
