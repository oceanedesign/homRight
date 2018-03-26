import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import{SynchroFaitePage} from "../synchro-faite/synchro-faite";

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
  namesHouse: string[];
  hideElement: false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider) {
   this.initializeNamesHouse();
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



    initializeNamesHouse() {
    this.namesHouse = [
      'PerfectHouse',
      'TheBigThree',
      'TheBigHouse',
      'SuperMaison',
      'ThePlaceToBe'
    ];
  }

  getNameHouse(ev: any) {
    // Reset items back to all of the namesHouse
    this.initializeNamesHouse();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.namesHouse = this.namesHouse.filter((nameHouse) => {
        return (nameHouse.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  synchronisationFaiteCompteur(){
        this.navCtrl.push(SynchroFaitePage);
  }

  
}
