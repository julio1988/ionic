import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-print',
  templateUrl: 'print.html',
})
export class PrintPage {
  public itemsParam;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    if (navParams.get("items")) {
      this.itemsParam = navParams.get("items");
    }
  }
}
