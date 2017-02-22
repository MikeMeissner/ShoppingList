import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the View page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

public list:any;
lists:FirebaseListObservable<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: AngularFire) {
    this.list = {};
    this.lists = fb.database.list('/lists');
    this.list=navParams.get("list");
  }



  deleteList(list){
  this.lists.remove(list); 

}

}
