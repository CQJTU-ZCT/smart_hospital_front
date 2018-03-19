import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMedicalCardPage } from './edit-medical-card';

@NgModule({
  declarations: [
    EditMedicalCardPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMedicalCardPage),
  ],
})
export class EditMedicalCardPageModule {}
