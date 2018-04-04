import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
    $( ".swiper-pagination::before" ).click(function() {
      console.log('ok');
    });

  }
  onChange(){
    $( "ion-list.transparency" ).removeClass("transparency");
  }

  goToPrev() {
    this.slides.slidePrev();
  }
  goToNext() {
    this.slides.slideNext();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );
    // if(currentIndex == 5){
    //   $( ".pagination span" ).replaceWith( "<span>4</span>" );
    // }
    // if(currentIndex == 0){
    //   $( ".pagination span" ).replaceWith( "<span>1</span>" );
    // }
  }

}
