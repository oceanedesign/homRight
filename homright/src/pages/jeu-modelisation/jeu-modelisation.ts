import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the JeuModelisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var JQuery:any;
declare var $:any;
import 'jquery-ui-dist/jquery-ui';
//declare var lignes;
//declare var colonnes;
//declare var test;
@IonicPage()
@Component({
  selector: 'page-jeu-modelisation',
  templateUrl: 'jeu-modelisation.html',
})
export class JeuModelisationPage {
cloneCount = 1;
ligne: number = 5;
colonne:number=5;

  constructor(public plt: Platform, private screenOrientation : ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	if (this.plt.is('mobile')) {
      	// Uniquement affiché pour les mobiles
      	console.log('I am a mobile device!');
	    //this.lockScreenOrientation();
    }
    if (this.plt.is('core')) {
      // uniquement affiché pour le desktop
      console.log('I am a core device!');
    }
     // console.log("test .js : "+colonnes);
    //this.tailleSol();
  }
  
  changeLigneColonne(){
      //$('.case-sol').find('.draggable').remove(); 
      //$( "#draggable5" ).draggable({snap:true, grid: [ 80, 80 ], zIndex: 1000, drag: function( event, ui ) {
      //console.log("x : "+ui.position.left + "et y : "+ui.position.top + "et le z-index : " + $( this ).css("z-index"));
      //}});

      $( "#draggable5" ).clone().attr('id', 'id'+ this.cloneCount++).appendTo(".droptarget").css({top: this.ligne*80, left: this.colonne*80});
      //$( '.draggable' ).draggable({ grid: [ 80, 80 ]});
      $( '.draggable' ).draggable({ grid: [ 80, 80 ] });
      $( ".droptarget" ).droppable();
      //.draggable({ grid: [ 80, 80 ] ,  opacity: 0.7, helper: "clone" });
      console.log("essai click")
  }

  tailleSol(){
    console.log("colonne : "+ this.colonne);
    $('.case-sol').width(this.colonne*80-2+"px");
    $('.case-sol').height(this.ligne*80-2+"px");

  }

  getCurrentScreenOrientation(){
  	// Connaitre l'orientation actuelle de l'écran (exemple : portrait)
  	console.log(this.screenOrientation.type);
  }


  lockScreenOrientation(){
  	//bloquer l'orientation de l'écran en paysage
  	this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }


  unlockScreenOrientation(){
  	//débloquer toutes les orientations de l'écran
  	this.screenOrientation.unlock();
  }

  activationBoutton(){
  	 $('#elements').addClass('elements-active');
  	 $('#elements').removeClass('elements');

  	 $('#contenuPrincipal').addClass('contenu-actif');
  	 $('#contenuPrincipal').removeClass('contenu');

  	 $('.container').removeClass('container-inactif');
  	 $('.container').addClass('container-actif');

  	 $('.activated').addClass('segment-activated');
  }

  desactiveBoutton(){
  	$('#elements').removeClass('elements-active');
  	$('#elements').addClass('elements');

  	 $('#contenuPrincipal').addClass('contenu');
  	 $('#contenuPrincipal').removeClass('contenu-actif');

  	 $('.container').removeClass('container-actif');
  	 $('.container').addClass('container-inactif');

  	$('.segment-button').removeClass('segment-activated');
  	$('.segment-button').attr('aria-pressed', 'false');
  }
}