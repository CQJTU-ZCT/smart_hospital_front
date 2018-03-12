import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorTabPage } from './doctor-tab';

@NgModule({
  declarations: [
    DoctorTabPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorTabPage),
  ],
})
export class DoctorTabPageModule {}
