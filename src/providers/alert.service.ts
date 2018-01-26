import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertProvider {
    constructor(public alertCtrl: AlertController) {
    }

presentErrorAlert(message: string){
   // return this.presentAlert("Ah error has occurred.", message);
}

presentAlertWithCallback(title: string, message: string): Promise<boolean>{
    return new Promise((resolve, reject) =>{
      const confirm = this.alertCtrl.create({
        title,
        message,
        buttons: [
          {
            text: "cancel",
            role: "cancel",
            handler: () => {
              confirm.dismiss().then(() => resolve(false));
              return false;
            }
          },
          {
            text: "Yes",
            handler: () => {
              confirm.dismiss().then(() => resolve(true));
              return false;
            }
          }
        ]
      });
      return confirm.present();
    });
  }}