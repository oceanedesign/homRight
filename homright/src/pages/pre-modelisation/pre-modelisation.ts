import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JeuModelisationPage } from '../jeu-modelisation/jeu-modelisation';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

declare var JQuery:any;
declare var $:any;
import 'jquery-ui-dist/jquery-ui';




@IonicPage()
@Component({
  selector: 'page-pre-modelisation',
  templateUrl: 'pre-modelisation.html',
})
export class PreModelisationPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreModelisationPage');
    // $( ".swiper-pagination::before" ).click(function() {
    //   console.log('ok');
    // });
  }
  onChangeFournisseur(){
    $( "ion-list.transparency" ).removeClass("transparency");
  }
  onChangeContrat(){
    $( ".right-arrow" ).removeClass("transparency");
  }

  goToPrev() {
    this.slides.slidePrev();

    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
    if(currentIndex == 1){
      $( ".left-arrow" ).addClass("transparency");
    }
    if(currentIndex == 3){
      $( ".right-arrow" ).removeClass("transparency");
    }
    currentIndex -1;
    $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );

  }
  goToNext() {
    this.slides.slideNext();

    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex == 4){
      $( ".right-arrow" ).addClass("transparency");
    }
    if(currentIndex == 2){
      $( ".left-arrow" ).removeClass("transparency");
    }
      currentIndex +1;
      $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );
    // if(currentIndex == 5){
    //   $( ".pagination span" ).replaceWith( "<span>4</span>" );
    // }
    // if(currentIndex == 0){
    //   $( ".pagination span" ).replaceWith( "<span>1</span>" );
    // }
  }

  modeliserMaison(){
    this.navCtrl.push(JeuModelisationPage);
  }

}
