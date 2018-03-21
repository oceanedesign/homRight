import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the RejoindreMaisonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rejoindre-maison',
  templateUrl: 'rejoindre-maison.html',
})
export class RejoindreMaisonPage {

  users: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider) {
  }


  ngOnInit(){
    this.authServiceProvider.getUsers().subscribe(
      data=>{
        this.users=data.users;
        console.log(data);
      },
      error=>{
        console.log(error);
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RejoindreMaisonPage');
  }
}
