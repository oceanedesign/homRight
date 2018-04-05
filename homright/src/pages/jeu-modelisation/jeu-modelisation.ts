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
superficie =0;
largeur =0;
longueur =0;

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
    this.InitCache();
  }
  
  InitCache(){
    $(".fond-cache").css("display", "none");
  }

  superficiePiece(){
    this.largeur = Math.round(this.colonne*0.6);
    this.longueur = Math.round(this.ligne*0.6);
    this.superficie = Math.round(this.largeur * this.longueur);

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



  validerTaille(){
    $(".fond-cache").css("display", "flex");
    $(".contenu-taille").css("display", "none");
    $("#case-maison").addClass("case-maison3d");
    $(".resize").addClass("inactive");
    $(".cube").removeClass("inactive").addClass("active");    
  }

  caseMaisonObjet(event){
    var enfantCaseSol = $('.actions').find('.spare-item'); //Definit la variable
    var countDrag =0;

    if(enfantCaseSol.length > 0) //
      { 
        $('.actions').find('.spare-item').remove(); // Suppression de l'enfant
      }
    console.log(event.target.id);
    $( "#"+event.target.id ).clone().removeClass( "objets-presentation" ).appendTo(".actions").addClass("spare-item")
    .draggable({
      //grid: [ 10, 10 ],
      // containment: "#case-maison",
      cursor: "grab",
      //cursorAt: { left: 10, top:10 },
      //revert: 'invalid',
      drag: function (event, ui) {
        //$(this).draggable( "option", "refreshPositions", true );
        //console.log("top : "+ui.offset.top+" + left : "+ui.offset.left);
         if(countDrag==1){
          this.PosTotal = $(".ligne-sol").offset();
          ui.position.left = ui.position.left - this.PosTotal.left;   
          ui.position.top = ui.position.top - this.PosTotal.top;
        }      

      },
      start: function (event, ui) { 
        countDrag++;
        
        //if (outside==true) {
        $(this).removeClass("spare-item");
        $(this).addClass("spare-item2");

        var positionP = $(this).find('.buttonSymetrie'); //Definit la variable
        if(positionP.length == 0){
          $(this).append("<img class='buttonSymetrie cache' src='../../assets/button/rotate.png'/>").promise().done(

            function(){

              $(this).on('click', '.buttonSymetrie', function() {
                  console.log('Activation symetrie');
                  var matrice1 = $(this).parent().css("transform");
                  var scx =parseInt(matrice1.split(",")[0].substring(7))*(-1) ;
                  if(scx== -1 || scx == 1){
                    $(this).parent().css({
                      "transform": "scaleX("+scx+")"
                      });
                  }else{
                     $(this).parent().css(
                      {
                      "transform": "scaleX(-1)"
                      }
                  );
                }

              })
            });
        }
        //$(event.target).data('offset-x', "+" + ui.offset.left);
       // $(event.target).data('offset-y', "+" + ui.offset.top);      
      },
      beforeStop:function(event,ui){
        
       // console.log("test");
      },

      stop: function(){
        $(this).insertBefore("#case-maison");
        //$(this).draggable('option','revert','invalid');
        
      }


    });
      //$( "#draggable5" ).clone().attr('id', 'id'+ this.cloneCount++).appendTo(".droptarget").css({top: this.ligne*80, left: this.colonne*80});
  }

  tailleSol(){
    console.log("colonne : "+ this.colonne);
    $('.case-sol, .actions').width(this.colonne*160-2+"px");
    $('.case-sol, #case-maison, .actions').height(this.ligne*60-2+"px");
    $('#case-maison').width(this.colonne*60-2+"px");
    this.superficiePiece();
    //$('#case-maison').height(this.ligne*60-2+"px");
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

    // $(".spare-item2").click(function () {
    //   console.log("test click sur item2");
    //       if( $(this).children().is( ':visible' ) ){
    //           $(this).children().hide(); 
    //       }else{
    //           $(this).children().show(); 
    //       }
    //   });
    
  }


}