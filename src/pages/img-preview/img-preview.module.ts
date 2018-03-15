import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImgPreviewPage } from './img-preview';

@NgModule({
  declarations: [
    ImgPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ImgPreviewPage),
  ],
})
export class ImgPreviewPageModule {}
