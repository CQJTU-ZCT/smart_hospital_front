import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCaseHistoryPage } from './add-case-history';

@NgModule({
  declarations: [
    AddCaseHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCaseHistoryPage),
  ],
})
export class AddCaseHistoryPageModule {}
