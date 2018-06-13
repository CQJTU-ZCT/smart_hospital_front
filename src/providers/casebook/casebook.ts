import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the CasebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CasebookProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CasebookProvider Provider');
  }

  storeBook(book) {
    window.localStorage.setItem("casebook", JSON.stringify(book));
  }

  getBook() {
    return JSON.parse(window.localStorage.getItem("casebook"));
  }

}
