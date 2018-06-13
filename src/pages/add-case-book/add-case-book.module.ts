import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCaseBookPage } from './add-case-book';

@NgModule({
  declarations: [
    AddCaseBookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCaseBookPage),
  ],
})
export class AddCaseBookPageModule {}
