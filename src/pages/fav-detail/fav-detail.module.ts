import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavDetailPage } from './fav-detail';

@NgModule({
  declarations: [
    FavDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FavDetailPage),
  ],
})
export class FavDetailPageModule {}
