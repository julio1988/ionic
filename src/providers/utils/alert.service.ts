import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";

@Injectable()
export class AlertService {
  constructor(public alertCtrl: AlertController) {}

  presentAlert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title,
      subTitle: message,
      buttons: [
        {
          text: "OK"
        }
      ]
    });

    return alert.present();
  }

  presentErrorAlert(message: string) {
    return this.presentAlert("An error has occurred.", message);
  }

  presentAlertWithCallback(title: string, message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const confirm = this.alertCtrl.create({
        title,
        message,
        buttons: [
          {
            text: "Cancel",
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
  }
}
