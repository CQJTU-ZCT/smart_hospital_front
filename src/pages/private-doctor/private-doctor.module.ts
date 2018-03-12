import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateDoctorPage } from './private-doctor';

@NgModule({
  declarations: [
    PrivateDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateDoctorPage),
  ],
})
export class PrivateDoctorPageModule {}
