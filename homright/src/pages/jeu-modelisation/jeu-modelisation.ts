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
PosTotal:any;

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
    this.PosTotal = $(".ligne-sol").offset(); 
    console.log("top : "+this.PosTotal.top+" + left : "+ this.PosTotal.left);
    this.tailleSol();
    this.MaisonDeplace();
    this.ActiveDraggable();
        
  }
  

  MaisonDeplace(){
    $(".ligne-sol")
      .draggable({
      grid: [ 60, 60],
       stop: function( event, ui ) {       
        this.PosTotal = $(this).offset();                
        console.log("top : "+this.PosTotal.top+" + left : "+ this.PosTotal.left);
      }
      })
      
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
    $( "#snaptarget" ).droppable({
      accept: ".spare-item2",
      over: function(event, ui) {
          $(".spare-item2").draggable({
              grid: [10, 10]
          });
      }

    });

  }; 




  previewObjet(){
    var enfantCaseSolPreview = $('.actions').find('.spare-item'); //Definit la variable
    var countDrag =0;
    if(enfantCaseSolPreview.length > 0) //
      { 
        $('.actions').find('.spare-item').remove(); // Suppression de l'enfant
      }

    $( ".objets-presentation" ).clone().removeClass( "objets-presentation" ).appendTo(".actions").addClass("spare-item")
    .draggable({
      //grid: [ 10, 10 ],
      // containment: "#preview",
      cursor: "grab",
      cursorAt: { left: 0, top:0 },
      revert: 'invalid',
      drag: function (event, ui) {
        //$(this).draggable( "option", "refreshPositions", true );
        //console.log("top : "+ui.offset.top+" + left : "+ui.offset.left);
       if(countDrag==1){
        this.PosTotal = $(".ligne-sol").offset();
        ui.position.left = ui.position.left - this.PosTotal.left;   
        ui.position.top = ui.position.top - this.PosTotal.top;
      }      
        //$(this).offset({
        //top : ui.offset.top -80,
        //left:  ui.offset.left -80
      //});


      },
      start: function (event, ui) { 
        countDrag++;
        //if (outside==true) {
        $(this).removeClass("spare-item");
        $(this).addClass("spare-item2");

       // $(this).css({
        //  left: $(this).position().left - this.PosTotal.left,
        //  top: $(this).position().top - this.PosTotal.top
        //});
        //
      //}

        //$(event.target).data('offset-x', "+" + ui.offset.left);
       // $(event.target).data('offset-y', "+" + ui.offset.top);      
      },
      beforeStop:function(event,ui){
        
       // console.log("test");
      },

      stop: function(){
        $(this).insertBefore("#preview");
        $(this).draggable('option','revert','invalid');
        
      }

    });
      //$( "#draggable5" ).clone().attr('id', 'id'+ this.cloneCount++).appendTo(".droptarget").css({top: this.ligne*80, left: this.colonne*80});
  }

  tailleSol(){
    console.log("colonne : "+ this.colonne);
    $('.case-sol, .actions').width(this.colonne*160-2+"px");
    $('.case-sol, #preview, .actions').height(this.ligne*60-2+"px");
    $('#preview').width(this.colonne*60-2+"px");
    //$('#preview').height(this.ligne*60-2+"px");
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