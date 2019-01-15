import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { contactService } from "../../services/contact.service";
import { ModalController } from "ionic-angular";
import { ContactDetailsPage } from "./contact-details/contact-details";

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [contactService]
})
export class DetailsPage {

  public shown: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public contacts: contactService,
    public modalCtrl: ModalController
  ) {
  }

  getDeviceContacts(heading: string){
    let obj = {
      'heading': heading,
      'contacts': this.contacts.getContacts()
    };
    let modal = this.modalCtrl.create(ContactDetailsPage, obj);
    modal.present();
    modal.onDidDismiss((item: any) => {
      console.log("Dismissed");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
