import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as $ from "jquery";

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {

  constructor(public http: HttpClient) {
    console.log($);
  }

  storeToken(token: string) {
    window.localStorage.setItem('token', token);
  }


  getToken(): string {
    return window.localStorage.getItem('token');
  }

  storeUser(user) {
    window.localStorage.setItem('user', user);
  }

  getUser() {
    return window.localStorage.getItem('user');
  }

  checkToken(): boolean {
    if (this.getToken() !== undefined &&
      this.getToken() !== '' &&
      this.getToken().length === 32) {
      return true;
    } else {
      return false;
    }
  }

  storeUserDetail(userDetail: string) {
    window.localStorage.setItem("userDetail", userDetail);
  }

  getUserDetail() {
    return JSON.parse(window.localStorage.getItem("userDetail"));
  }

}
