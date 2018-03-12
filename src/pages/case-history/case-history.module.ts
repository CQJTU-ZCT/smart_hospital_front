import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseHistoryPage } from './case-history';

@NgModule({
  declarations: [
    CaseHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseHistoryPage),
  ],
})
export class CaseHistoryPageModule {}
