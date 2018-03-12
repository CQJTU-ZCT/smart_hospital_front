import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppoinmentTabPage } from './appoinment-tab';

@NgModule({
  declarations: [
    AppoinmentTabPage,
  ],
  imports: [
    IonicPageModule.forChild(AppoinmentTabPage),
  ],
})
export class AppoinmentTabPageModule {}
