import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { NATIVEMODULES, NATIVEPROVIDERS, PROVIDERS, MODULES} from "./app.imports"

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    MODULES,
    NATIVEMODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    PROVIDERS,
    NATIVEPROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
