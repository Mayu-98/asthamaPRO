import {Injectable} from '@angular/core';
import { Contacts } from 'ionic-native';
import 'rxjs/Rx';

@Injectable()
export class contactService{
  private contacts: any;

  getContacts(){
    Contacts.find(['displayName', 'phoneNumbers'], {filter: "", multiple: true})
      .then(data => {
        this.contacts = data;
        console.log(this.contacts);
      });
    return this.contacts;
  }
}

