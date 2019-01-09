import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoSociedadPage } from '../info-sociedad/info-sociedad';


@Component({
  selector: 'page-sociedad',
  templateUrl: 'sociedad.html'
})
export class SociedadPage {

  constructor(public navCtrl: NavController) {

  }

  infoSociedadPage(){
  	this.navCtrl.push(InfoSociedadPage);
  }

}