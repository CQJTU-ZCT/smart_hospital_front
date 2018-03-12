import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPersonalInfoPage } from './edit-personal-info';

@NgModule({
  declarations: [
    EditPersonalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPersonalInfoPage),
  ],
})
export class EditPersonalInfoPageModule {}
