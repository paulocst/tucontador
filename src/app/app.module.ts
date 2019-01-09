import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContadorPage } from '../pages/contador/contador';
import { SociedadPage } from '../pages/sociedad/sociedad';
import { InicioPage } from '../pages/inicio/inicio';
import { EstadisticaPage } from '../pages/estadistica/estadistica';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { InfoSociedadPage } from '../pages/info-sociedad/info-sociedad';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContadorPage,
    SociedadPage,
    InicioPage,
    EstadisticaPage,
    TabsPage,
    InfoPage,
    InfoSociedadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContadorPage,
    SociedadPage,
    InicioPage,
    EstadisticaPage,
    TabsPage,
    InfoPage,
    InfoSociedadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
