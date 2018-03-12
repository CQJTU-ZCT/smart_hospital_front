import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageTabPage } from './message-tab';

@NgModule({
  declarations: [
    MessageTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageTabPage),
  ],
})
export class MessageTabPageModule {}
