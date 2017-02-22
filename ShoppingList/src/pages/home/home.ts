import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListDetailsPage } from '../listDetails/listDetails';
import { ViewPage } from '../view/view';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lists:FirebaseListObservable<any>;

   constructor(public navCtrl: NavController, fb: AngularFire) {
    this.lists = fb.database.list('/lists');

  }

addList(list){
    this.navCtrl.push(ListDetailsPage); 
  }

  viewList(list){
    this.navCtrl.push(ViewPage,{list:list}); 
  }



}
