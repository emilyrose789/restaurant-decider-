import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResDetailPage } from './res-detail';

@NgModule({
  declarations: [
    ResDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ResDetailPage),
  ],
})
export class ResDetailPageModule {}
