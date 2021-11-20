import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // stored url in the private in variable
  private _registerUrl="http://localhost:3001/api/register";
  private _loginUrl="http://localhost:3001/api/login";

  // create httpclient instance
  constructor(private http : HttpClient) { }

  registerUser( user:any ){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser( user:any ){
    return this.http.post<any>(this._loginUrl, user)
  }

}
