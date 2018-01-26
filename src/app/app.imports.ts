// Providers
import { ToastProvider } from '../providers/toast.service';
import { AlertProvider } from '../providers/alert.service'

//Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Native Modules
import { BrowserModule } from '@angular/platform-browser'

// Modules
import { HomePageModule } from '../pages/home/home.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { ReportPageModule } from '../pages/report/report.module';
import { LoginPageModule } from '../pages/login/login.module';


export const NATIVEMODULES = [
    BrowserModule
]

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen
]

export const PROVIDERS = [
    ToastProvider,
    AlertProvider
]

export const MODULES = [
    HomePageModule,
    ProfilePageModule,
    ScannerPageModule,
    ReportPageModule,
    LoginPageModule
]

