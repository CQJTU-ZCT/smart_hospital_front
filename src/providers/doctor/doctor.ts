import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DoctorProvider Provider');
  }

  setCurrentDoctor(doctor: any) {
    window.localStorage.setItem("currentDoctor", JSON.stringify(doctor));
  }

  getCurrentDoctor() {
    return JSON.parse(window.localStorage.getItem("currentDoctor"));
  }

}
