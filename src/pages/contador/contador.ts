import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-contador',
  templateUrl: 'contador.html'
})
export class ContadorPage {

  constructor(public navCtrl: NavController) {

  }

  infoPage(){
  	this.navCtrl.push(InfoPage);
  }

}
