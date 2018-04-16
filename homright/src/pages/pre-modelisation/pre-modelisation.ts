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

  temperature: number= 20;

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PreModelisationPage');
    this.slides.lockSwipes(true);

    // $( ".swiper-pagination::before" ).click(function() {
    //   console.log('ok');
    // });
  }


  modeliserMaison(){
    this.navCtrl.push(JeuModelisationPage);
  }

  editerScene(){
    console.log('ok');
    $(".fond-cache").css("display", "flex");
  }
  returnChoose(){
    $(".fond-cache").css("display", "none");
  }

  onChangeFournisseur(){
    $( "ion-list.transparency" ).removeClass("transparency");
  }
  onChangeContrat(){
    $( ".right-arrow" ).removeClass("transparency");
  }

  goToPrev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();

    let currentIndex = this.slides.getActiveIndex()+1;
    if(currentIndex == 1){
      $( ".left-arrow" ).addClass("transparency");
    }
    if(currentIndex == 3){
      $( ".right-arrow" ).removeClass("transparency");
    }

    $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );
    this.slides.lockSwipes(true);

  }
  goToNext() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();

    let currentIndex = this.slides.getActiveIndex()+1;
    if(currentIndex == 4){
      $( ".right-arrow" ).addClass("transparency");
    }
    if(currentIndex == 2){
      $( ".left-arrow" ).removeClass("transparency");
    }
      //currentIndex +1;
      $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );
    this.slides.lockSwipes(true);
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


}
