import { Toast, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastProvider { 
 
    toast : Toast;

    constructor(private toastCtrl: ToastController) { 

    }

    presentToast(){
        if(this.toast){
            this.toast.dismiss();
        }

        this.toast = this.toastCtrl.create({
            message : 'Teste Toast',
            duration : 2000
        });

        this.toast.present();
    }

}
