import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { RestListPage } from '../pages/rest-list/rest-list';
import { ResDetailPage } from '../pages/res-detail/res-detail';
import { FavPage } from '../pages/fav/fav';
import { FavDetailPage } from '../pages/fav-detail/fav-detail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SigninPage,
    SignupPage,
    RestListPage,
    ResDetailPage,
    FavPage,
    FavDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SigninPage,
    SignupPage,
    RestListPage,
    ResDetailPage,
    FavPage,
    FavDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]})
export class AppModule {}
