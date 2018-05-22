import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  private server = "http://api.zjhfyq.cn";


  getReigiterApi() {
    return this.server + "/api-user/users/";
  }

  getLoginApi(): string {
    return this.server + "/api-sso/login";
  }

  getHospitalsApi(): string {
    return "http://sh.zjhfyq.cn/hospital";
  }

}
