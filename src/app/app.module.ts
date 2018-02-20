import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


import { MyApp } from './app.component';
import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
import { DbProvider } from '../providers/db/db';

@NgModule({
  declarations: [
    MyApp,
    MisTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbProvider,
    SQLite,
    LaunchNavigator
  ]
})
export class AppModule {}
