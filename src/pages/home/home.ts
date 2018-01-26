import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ListPage } from '../list/list';
import { ToastProvider} from '../../providers/toast.service';
import { AlertProvider } from '../../providers/alert.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = []; 
  constructor(public navCtrl: NavController, private toast: ToastProvider, private alert: AlertProvider) {
    this.items = [
      {
        'title': 'Perfil',
        'icon': 'ios-contact',
        'color': '#0CA9EA'
      },
      {
        'title': 'Relatório',
        'icon': 'document',
        'color': '#F46529'
      },
      {
        'title': 'Scanner',
        'icon': 'camera',
        'color': '#FFD439'
      },
      {
        'title': 'Login',
        'icon': 'person',
        'color': '#CE6296'
      },
      {
        'title': 'List',
        'icon': 'list-box',
        'color': '#CE6276'
      },
    ]
  }

  openNavDetailsPage(item) {
     if(item.title == 'Perfil'){
      this.navCtrl.push(ProfilePage, { item: item });
      this.alert.showPrompt();
     }
     if(item.title == 'List'){
      this.navCtrl.push(ListPage, { item: item });
      this.toast.presentToast();
     }
  }
}
