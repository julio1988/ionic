// Providers
import { ToastProvider } from '../providers/toast.service';

//Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Native Modules
import { BrowserModule } from '@angular/platform-browser'

// Modules
import { HomePageModule } from '../pages/home/home.module';
import { ProfilePageModule } from '../pages/profile/profile.module';


export const NATIVEMODULES = [
    BrowserModule
]

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen
]

export const PROVIDERS = [
    ToastProvider
]

export const MODULES = [
    HomePageModule,
    ProfilePageModule
]

