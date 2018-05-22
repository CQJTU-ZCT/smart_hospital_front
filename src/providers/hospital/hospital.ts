import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HospitalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HospitalProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HospitalProvider Provider');
  }

  storeHospital(hospital: any) {
    window.localStorage.setItem('hospital', hospital);
  }

  getHospital() {
    return JSON.parse(window.localStorage.getItem('hospital'));
  }

}
