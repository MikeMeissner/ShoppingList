import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-contact',
  templateUrl: 'listDetails.html'
})
export class ListDetailsPage {

public list:any;
lists:FirebaseListObservable<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: AngularFire) {
    this.list = {};
    this.lists = fb.database.list('/lists');
  }

  saveList(){
      this.lists.push(this.list);
    }

}

