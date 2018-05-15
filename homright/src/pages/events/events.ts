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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  pushMenu(){
    //Fonction permettant d'activer le menu
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
  {id:0, nom: 'Ecoville', points: 100, requests: 5, interet:"Intéressé(e)", 
   description: 'Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens à la réunion EcoVille pour découvrir les projets écologiques de Saint-Denis pour 2018. ', 
   recommandations: '- Réduire son thermostat et/ou son chauffage électrique et éviter l’utilisation des appareils électriques énergivores.', startTime: '09:00',
   endTime: '10:30', date:'10/06', startDate: '10/06/2018', endDate: '10/06/2018'},

  {id:1, nom: 'Hackathon', points: 150, requests: 7, interet:"Pas intéressé(e)",
   description: "Tu veux participer à la transition énergétique de ton quartier ? Tu as des idées novatrices pour que ta ville devienne plus verte ? Viens au Hackathon de Paris sur l'énergie verte ! ", startTime: '18:00', 
   endTime: '20:00', date:'18/06', startDate: '18/06/2018', endDate: '18/06/2018'}
];

  ouvertureCard(event){
    // Ouverture de la carte évenement
    console.log("ouverture Card");
    let sectionUn = $(event.target.closest('.card-section-1'));
    let sectionDeux = $(event.target).closest('.card').find('.card-section-2');

    sectionUn.animate({
          height: 'toggle'
    });

    setTimeout(function() {
      sectionDeux.animate({
            height: 'toggle'
      });
     }, 550);
  } 

  fermetureCard(event){
    // Fermeture de la carte évenement
    console.log("test fermeture");
    let sectionDeux = $(event.target.closest('.card-section-2'));
    let sectionUn = $(event.target).closest('.card').find('.card-section-1');

    sectionDeux.animate({
      height: 'toggle'
    });

    setTimeout(function() {
      sectionUn.animate({
            height: 'toggle'
      });
    }, 550);
  }

  changementInteret(event){
    //Permet de changer l'intéret de l'utilisateur pour un évenement de la ville 
    let bouton = event.target;
    console.log(event.target);
    let identifiant = $(event.target.closest('.card')).attr('id');
    if($(bouton).attr('value') =='Pas intéressé(e)'){
      console.log("changement : interet");
      $(bouton).attr('value', 'Intéressé(e)');
      //bouton.innerHTML = 'Intéressé(e)';
      this.cards[identifiant].interet = 'Intéressé(e)';
    }else{
      console.log("changement : pas interet");
      $(bouton).attr('value', 'Pas intéressé(e)'); 
      //bouton.innerHTML = 'Pas intéressé(e)';  
      this.cards[identifiant].interet = 'Pas intéressé(e)';  
    }
    let card = $(event.target.closest('.card'));
    card.removeClass("active");
  }


}
