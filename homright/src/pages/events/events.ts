import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";

declare var jQuery:any;
declare var $:any;

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

cardsHomright = [

  {id:0, nom: 'Pics de consommation', points: 50,
   typeConco: 'Consommation énergétique défavorable',
   description: 'Consommation énergétique défavorable', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '18:00',
   endTime: '20:00', startDate: '18/06/2018', endDate: '18/06/2018'},

  {id:1, nom: 'Energie verte', points: 20,
   typeConco: 'Consommation énergétique favorable',
   description: 'Consommation énergétique favorable', 
   recommandations: 'Profitez en pour lancer vos appareils électriques énergivores !', startTime: '09:00',
   endTime: '10:00', startDate: '10/06/2018', endDate: '10/06/2018'},

  {id:2, nom: 'Energie verte', points: 20,
   typeConco: 'Consommation énergétique favorable',
   description: 'Consommation énergétique favorable', 
   recommandations: 'Profitez en pour lancer vos appareils électriques énergivores !', startTime: '12:00',
   endTime: '13:00', startDate: '10/06/2018', endDate: '10/06/2018'}

];

  cards = [
  {id:0, nom: 'Ecoville', points: 100, requests: 5, interet:"Pas intéressé(e)", 
   description: 'Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens à la réunion EcoVille pour découvrir les projets écologique de Saint-Denis pour 2018. ', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '09:00',
   endTime: '10:30', date:'20/05', startDate: '10/06/2018', endDate: '10/06/2018'},

  {id:1, nom: 'Hackathon', points: 150, requests: 7, interet:"Pas intéressé(e)",
   description: 'Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens à la réunion EcoVille pour découvrir les projets écologique de Saint-Denis pour 2018. ', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '18:00',
   endTime: '20:00', date:'20/05', startDate: '18/06/2018', endDate: '18/06/2018'}
];

  ouvertureCard(event){
    
    if(!$(event.target.closest('.card')).hasClass('active')){
      console.log("ouverture Card");
      let card = $(event.target.closest('.card'));
      //var cardTop = card.position().top;
      //var scrollTopVal = cardTop - 30;
      card.addClass("active");
    };
  } 

  fermetureCard(event){
    console.log("test fermeture");
      //if (this.animating) return;
      //this.animating = true;
      
      let card = $(event.target.closest('.card'));
      console.log($('.card'));
      card.removeClass("active");
    }

  changementInteret(event){
    
    let bouton = event.target;
    console.log(event.target);
    let identifiant = $(event.target.closest('.card')).attr('id');
    if($(bouton).attr('value') =='pasinteresse'){
      console.log("changement : interet");
      $(bouton).attr('value', 'interesse');
      bouton.innerHTML = 'Intéressé(e)';
      this.cards[identifiant].interet = 'Intéressé(e)';
    }else{
      console.log("changement : pas interet");
      $(bouton).attr('value', 'pasinteresse'); 
      bouton.innerHTML = 'Pas intéressé(e)';  
      this.cards[identifiant].interet = 'Pas intéressé(e)';  
    }
    let card = $(event.target.closest('.card'));
    card.removeClass("active");
  }


}
