import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JeuModelisationPage } from '../jeu-modelisation/jeu-modelisation';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  countPiece = -1;

  regMaison = {"fournisseur":"","contrat":"","nb_habitants":"1","superficie":"25","volets_fermes":"","chauffage_reduit":""};
  
  regPiece = {"piece_id":"","nomPiece": "", "type":"", "temperature":""};
  updatePiece = {"piece_id":"","nomPiece": "", "type":"", "temperature":""};

  pieces = [
   //{"piece_id":"0","nomPiece": "Chambre", "type":"lit", "temperature":"22"}
  // {"piece_id":"1","nomPiece": "Salle de bains", "type":"douche", "temperature":"20"},
  // {"piece_id":"2","nomPiece": "Salon", "type":"canape", "temperature":"25"}
  ];

  form: FormGroup;
  fournisseurs = ['Edf', 'Engie', 'Eni', 'Ekwater', 'Alterna'];
  contractsByFournisseurs = {
    Edf: ["Vert électrique", "Tarif Bleu"],
    Engie: ["Happ'e", "Elec Ajust 3 ans", "Duo Ajust 3 ans"],
    Eni: ["Webeo", "Evo", "Astucio Eco", "Astucio Planète"],
    Ekwater: ["Electricité prix variable", "Electricité prix fixe"],
    Alterna: ["Idea", "Idea Vert"],
  };
  contrats = [];




  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,  private _cdr: ChangeDetectorRef) {
    this.form = fb.group({
      fournisseur: [''],
      contrat: [''],
    });
  }

  onFournisseurChange(): void {
    $( "ion-list.transparency" ).removeClass("transparency");
    console.log(this.regMaison.fournisseur);

    let fournisseur = this.form.get('fournisseur').value;
    this.contrats = this.contractsByFournisseurs[fournisseur];
    this._cdr.detectChanges();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PreModelisationPage');
    this.slides.lockSwipes(true);

    console.log(this.pieces.length);
    // $( ".swiper-pagination::before" ).click(function() {
    //   console.log('ok');
    // });

    console.log(this.pieces);
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


    var bouton = event.target.closest('ion-item'); //Définit la variable bouton et attribut le bouton
    console.log($(bouton).attr('id')); //récupération de l'attribut "id" du bouton

    this.updatePiece = this.pieces[$(bouton).attr('id')] ; //Attribut la nouvelle valeur
    console.log(this.updatePiece);
  }

  returnChoose(){
    //Ferme la pop up sans validation
    $(".fond-cache").css("display", "none");
    $(".fond-cache2").css("display", "none");
  }

  validerModificationPiece(){
    //Modification de la piece validée
    $(".fond-cache").css("display", "none");
    console.log(this.updatePiece);
    
  }

  ajoutPiece(){
    $(".fond-cache2").css("display", "flex");
    this.regPiece.nomPiece="";
  }

  validerAjoutPiece(){
    $(".fond-cache2").css("display", "none");
    this.regPiece.temperature = this.temperature.toString();

    
    this.countPiece = (this.countPiece +1);
    var idPiece= this.countPiece.toString();
    this.pieces.push({"piece_id":idPiece,"nomPiece":this.regPiece.nomPiece,"type":this.regPiece.type, "temperature":this.regPiece.temperature});

    console.log(this.regPiece.type);
    console.log(this.regPiece.nomPiece);
    console.log(this.pieces);
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
