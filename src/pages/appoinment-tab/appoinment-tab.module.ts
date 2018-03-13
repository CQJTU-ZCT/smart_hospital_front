import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentTabPage } from './appoinment-tab';

@NgModule({
  declarations: [
    AppointmentTabPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentTabPage),
  ],
})
export class AppoinmentTabPageModule {}
