import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseBookPage } from './case-book';

@NgModule({
  declarations: [
    CaseBookPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseBookPage),
  ],
})
export class CaseBookPageModule {}
