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
    this.tailleSol();
    this.MaisonDeplace();
    this.ActiveDraggable();

  }
  

  MaisonDeplace(){
    $(".case-sol")
      .draggable({ grid: [ 60, 60] })
      
      .on("mouseover", function(){
        $( this ).addClass("move-cursor")
      })

      .on("mousedown", function(){
        $( this )
          .removeClass("move-cursor")
          .addClass("grab-cursor")
          .addClass("opac");
      
      })

      .on("mouseup", function(){
        $( this )
          .removeClass("grab-cursor")
          .removeClass("opac")
          .addClass("move-cursor");
      });
  }



  ActiveDraggable(){

    $( ".spare-item" ).draggable({
        grid: [ 10, 10 ],
        containment: "#preview",
        
        cursor: "grab",
        revert: 'invalid',
        stop: function(){
        $(this).draggable('option','revert','invalid');
    },
       start: function (event, ui) { 
      //if (outside==true) {
        $(this).removeClass("spare-item");
        $(this).addClass("spare-item2");
      //}
    }});
                 
    $('.spare-item2').droppable({
      greedy: true,
      tolerance: 'intersect',
      drop: function(event,ui){
          ui.draggable.draggable('option','revert',true);
      }
    });
            
    $( "#snaptarget" ).droppable({
      accept: ".spare-item2",
      over: function(event, ui) {
          $(".spare-item2").draggable({
              grid: [10, 10]
          });
      },    
      drop: function( event, ui ) {
          var pos = ui.draggable.offset(), dPos = $(this).offset();
          console.log(pos.top - dPos.top, pos.left - dPos.left);
      }
    });            
  }; 




  changeLigneColonne(){
    var enfantCaseSolPreview = $('.actions').find('.spare-item'); //Definit la variable
    if(enfantCaseSolPreview.length > 0) //
      { 
        $('.actions').find('.spare-item').remove(); // Suppression de l'enfant
      }

    $( ".objets-presentation" ).clone().removeClass( "objets-presentation" ).appendTo(".actions").addClass("spare-item").draggable({
      //grid: [ 10, 10 ],
      // containment: "#preview",
      cursor: "grab",
      revert: 'invalid',
      stop: function(){
        $(this).draggable('option','revert','invalid');
      },
      start: function (event, ui) { 
        //if (outside==true) {
        $(this).removeClass("spare-item");
        $(this).addClass("spare-item2").droppable({
          greedy: true,
          tolerance: 'intersect',
          drop: function(event,ui){
            ui.draggable.draggable('option','revert',true);
          }
        });
      //}
      }
    });

      //$( "#draggable5" ).clone().attr('id', 'id'+ this.cloneCount++).appendTo(".droptarget").css({top: this.ligne*80, left: this.colonne*80});
      
  }

  tailleSol(){
    console.log("colonne : "+ this.colonne);
    $('.case-sol').width(this.colonne*60-2+"px");
    $('.case-sol').height(this.ligne*60-2+"px");

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