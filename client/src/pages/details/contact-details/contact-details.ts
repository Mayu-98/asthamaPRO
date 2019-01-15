import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from "ionic-angular";
import { NgZone } from '@angular/core';
import { LoadingController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage{

  public contacts: any;
  public heading: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public zone: NgZone,
              public loadCtrl: LoadingController) {

  }

  ionViewCanEnter() {

  }

  ionViewDidEnter(){
    let loading = this.loadCtrl.create({
      content: 'Please wait...'
    });
    loading.present().then(() => {
      this.zone.run(() => {
        this.contacts = this.navParams.get('contacts');
        this.heading = this.navParams.get('heading');
      });
    });

    setTimeout(() => {
      loading.dismiss().then(() => {
        console.log("dismissed spinner");
      });

    }, 2000);
  }


  onSelect(item: any){
    this.viewCtrl.dismiss(item);
  }

}
