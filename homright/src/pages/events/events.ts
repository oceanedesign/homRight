import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";



@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

	eventType: string ="eventApp";
  animating = false;
  step1 = 500;
  step2 = 500;
  step3 = 500;
  reqStep1 = 600;
  reqStep2 = 800;
  reqClosingStep1 = 500;
  reqClosingStep2 = 500;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }

  cards = [
  {nom: 'Energie verte', points: 20, requests: 5,
   typeConco: 'Consommation énergétique favorable', interet:"Pas intéressé", 
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
   description: 'Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens à la réunion EcoVille pour découvrir les projets écologique de Saint-Denis pour 2018. ', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '09:00',
   endTime: '10:30', startDate: '10/06/2018', endDate: '10/06/2018'},

  {nom: 'Pics de consommation', points: 50, requests: 7,
   typeConco: 'Consommation énergétique défavorable', interet:"Pas intéressé",
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-2.jpg',
   description: 'Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens à la réunion EcoVille pour découvrir les projets écologique de Saint-Denis pour 2018. ', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '18:00',
   endTime: '20:00', startDate: '18/06/2018', endDate: '1806/2018'}
];

  ouvertureCard(){
    
    if(!$('.card').hasClass('active')){
    console.log("ouverture Card");
      let card = $('.card');
      //var cardTop = card.position().top;
      //var scrollTopVal = cardTop - 30;
      card.addClass("flip-step1 active");

      //scrollCont.animate({scrollTop: scrollTopVal}, this.step1);

      setTimeout(function() {
      //$scrollCont.animate({scrollTop: scrollTopVal}, step2);
        card.addClass("flip-step2");

        setTimeout(function() {
        //$scrollCont.animate({scrollTop: scrollTopVal}, this.step3);
          card.addClass("flip-step3");

          setTimeout(function() {
            this.animating = false;
          }, this.step3);

        }, this.step2*0.5);

      }, this.step1*0.65);
    };
  } 

  fermetureCard(){
    console.log("test fermeture");
      //if (this.animating) return;
      //this.animating = true;
      
      let card = $('.card');
      console.log($('.card'));
      card.removeClass("flip-step3 active");

      setTimeout(function() {
        card.removeClass("flip-step2");

        setTimeout(function() {
          card.removeClass("flip-step1");

          setTimeout(function() {
            this.animating = false;
          }, this.step1);

        }, this.step2*0.65);

      }, this.step3/2);
    }

}
