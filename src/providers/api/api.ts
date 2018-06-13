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
  private server = "https://api.zjhfyq.cn";


  getReigiterApi() {
    return this.server + "/api-user/users/";
  }

  getLoginApi(): string {
    return this.server + "/api-sso/login";
  }

  getHospitalsApi(): string {
    return "https://sh.zjhfyq.cn/hospital";
  }

  getDocters() {
    return this.server + "/api-hospital/hospital/doctor";
  }

  getBranches() {
    return this.server + "/api-hospital/hospital/branch";
  }

  getPreorders() {
    return this.server + "/api-appointment/preorder";
  }

  postPreorder() {
    return this.server + "/api-appointment/preorder";
  }

  deletePreorder() {
    return this.server + "/api-appointment/preorder";
  }

  getBranchDoctor() {
    return this.server + "/api-hospital/branch-doctor-title";
  }

  getDoctorBranches() {
    return this.server + "/api-hospital/branch-doctor-title";
  }

  postFirstAid() {
    return this.server + "/api-onekeyfirstaid/sos"
  }

  getEmrs() {
    return this.server + "/api-emr/emr";
  }
  postEmr() {
    return this.server + "/api-emr/emr";
  }

  getEmrRecord() {
    return this.server + "/api-emr/emr/record";
  }

  postEmrRecord() {
    return this.server + "/api-emr/emr/record";
  }

  putUserInfo() {
    return this.server + "/api-user/detail";
  }

  postFile() {
    return this.server + "/api-file/profile";
  }

  postFeedback() {
    return this.server + "/api-feedbackplatform/feedback";
  }


}
