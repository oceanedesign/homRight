import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JeuModelisationPage } from '../jeu-modelisation/jeu-modelisation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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

    let fournisseur = this.form.get('fournisseur').value;
    this.contrats = this.contractsByFournisseurs[fournisseur];
    this._cdr.detectChanges();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PreModelisationPage');
    this.slides.lockSwipes(true);
    //console.log(this.pieces.length);
    //console.log(this.pieces);
  }

  voirVolet(){
    //Permet de voir si la valeur choisie est en accord avec la valeur cliquée
    console.log(this.regMaison.volets_fermes);
  }

  voirChauffage(){
    //Permet de voir si la valeur choisie est en accord avec la valeur cliquée
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
    //Ferme la pop up
    $(".fond-cache").css("display", "none");
    $(".fond-cache2").css("display", "none");
  }

  validerModificationPiece(){
    //Modification de la piece validée
    $(".fond-cache").css("display", "none");
    console.log(this.updatePiece);
    
  }

  ajoutPiece(){
    //Active la pop up
    $(".fond-cache2").css("display", "flex");
    this.regPiece.nomPiece="";
  }

  validerAjoutPiece(){
    //Push la piece dans le json

    $(".fond-cache2").css("display", "none");
    this.regPiece.temperature = this.temperature.toString();

    this.countPiece = (this.countPiece +1);
    var idPiece= this.countPiece.toString();

    //Ajout de la piece dans le json
    this.pieces.push({"piece_id":idPiece,"nomPiece":this.regPiece.nomPiece,"type":this.regPiece.type, "temperature":this.regPiece.temperature});
  }

  onChangeContrat(){
    $( ".right-arrow" ).removeClass("transparency");
    console.log(this.regMaison.contrat);
  }

  goToPrev() {
    //Récupere le numéro de la slide précédente et l'attribue à la pagination
    this.slides.lockSwipes(false);//Debloquer le swipe
    this.slides.slidePrev();

    let currentIndex = this.slides.getActiveIndex()+1;
    if(currentIndex == 1){ //Si on est sur la slide 1
      $( ".left-arrow" ).addClass("transparency"); //Activer la transparence de la fleche de gauche
    }
    if(currentIndex == 3){ //Si on est sur la slide 3
      $( ".right-arrow" ).removeClass("transparency"); //Enlever la transparence de la fleche de droite
    }

    $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" ); //Remplacer la valeur
    this.slides.lockSwipes(true); //Bloquer le swipe

  }
  goToNext() {
    //Récupere le numéro de la slide suivante et l'attribue à la pagination
    this.slides.lockSwipes(false); //Debloquer le swipe
    this.slides.slideNext();

    let currentIndex = this.slides.getActiveIndex()+1;
    if(currentIndex == 4){ //Si on est sur la slide 4
      $( ".right-arrow" ).addClass("transparency"); //Activer la transparence de la fleche de droite
    }
    if(currentIndex == 2){ //Si on est sur la slide 2
      $( ".left-arrow" ).removeClass("transparency"); //Enlever la transparence de la fleche de gauche
    }
      //currentIndex +1;
      $( ".pagination span" ).replaceWith( "<span>"+currentIndex+"</span>" );//Remplacer la valeur
    this.slides.lockSwipes(true);//Bloquer le swipe
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
