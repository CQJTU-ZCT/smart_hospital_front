import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayPlatformPage } from './pay-platform';

@NgModule({
  declarations: [
    PayPlatformPage,
  ],
  imports: [
    IonicPageModule.forChild(PayPlatformPage),
  ],
})
export class PayPlatformPageModule {}
