import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnboardingPage } from "../onboarding/onboarding";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  onBoard: any = OnboardingPage;

  constructor(public navCtrl: NavController) {

  }

}
