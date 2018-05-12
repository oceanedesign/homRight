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
  valueObjet: String;
  regMaison = {"fournisseur":"","contrat":"","nb_habitants":"1","superficie":"25","volets_fermes":"","chauffage_reduit":""};
  
  regPiece = {"nomPiece": "", "type":"", "temperature":""};


  pieces = [{"nomPiece": "Chambre", "type":"lit", "temperature":"22"},
  {"nomPiece": "Salle de bains", "type":"douche", "temperature":"20"},
  {"nomPiece": "Salon", "type":"canape", "temperature":"25"}];


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

  voirVolet(){
    console.log(this.regMaison.volets_fermes);
  }

  voirChauffage(){
    console.log(this.regMaison.chauffage_reduit);
  }

  modeliserMaison(){
    //Fonction permettant d'aller sur l'écran de modélisation de la maison (phase de jeu)
    console.log(this.regMaison)
    this.navCtrl.push(JeuModelisationPage);
  }

  editerPiece(event){
      //Ouvre la pop up d'édition de la pièce

    $(".fond-cache").css("display", "flex");

    var bouton = event.target.closest('button'); //Définit la variable bouton et attribut le bouton
    console.log($(bouton).attr('value')); //récupération de l'attribut "value" du bouton
    this.regPiece.nomPiece = $(bouton).attr('value') ; //Attribut la nouvelle valeur

  }

  returnChoose(){
    //Ferme la pop up sans validation
    $(".fond-cache").css("display", "none");
    $(".fond-cache2").css("display", "none");
  }

  validerChoix(){
    //Ajout de la piece
    $(".fond-cache").css("display", "none");
    
  }

  ajoutPiece(){
    $(".fond-cache2").css("display", "flex");
    this.regPiece.nomPiece="";
  }

  validerAjoutPiece(){
    $(".fond-cache2").css("display", "none");
    this.regPiece.temperature = this.temperature.toString();


    this.pieces.push({"nomPiece":"4","type":"pending", "temperature":"25"});

    console.log(this.regPiece.type);
    console.log(this.regPiece.nomPiece);
  }

  onChangeFournisseur(){
    $( "ion-list.transparency" ).removeClass("transparency");
    console.log(this.regMaison.fournisseur);
  }

  onChangeContrat(){
    $( ".right-arrow" ).removeClass("transparency");
    console.log(this.regMaison.contrat);
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
