import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ListDetailsPage } from '../pages/listDetails/listDetails';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyA9WSFxsSNfWeAzo1fznJj2qnx6p7WX_FE",
  authDomain: "midtermexammobile.firebaseapp.com",
  databaseURL: "https://midtermexammobile.firebaseio.com",
  storageBucket: "midtermexammobile.appspot.com",
  messagingSenderId: "558829317368"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ListDetailsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ListDetailsPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
