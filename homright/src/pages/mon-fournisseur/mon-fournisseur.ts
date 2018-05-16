import { Component, ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';

declare var $:any;

@IonicPage()
@Component({
  selector: 'page-mon-fournisseur',
  templateUrl: 'mon-fournisseur.html',
})
export class MonFournisseurPage {

  regMaison = {"fournisseur":"","contrat":"","nb_habitants":"1","superficie":"25","volets_fermes":"","chauffage_reduit":""};

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

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,  private _cdr: ChangeDetectorRef) {
    this.form = fb.group({
      fournisseur: [''],
      contrat: [''],
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MonFournisseurPage');
  }

  onChangeFournisseur(): void{
    $( ".contrat.transparency" ).removeClass("transparency");

    let fournisseur = this.form.get('fournisseur').value;
    this.contrats = this.contractsByFournisseurs[fournisseur];
    this._cdr.detectChanges();    
  }

  onChangeContrat(){
  }

  retourMenu(){
    //Retourne sur le menu
    this.navCtrl.pop();
  }

  pushAccueil(){
    //fonction menant vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

}
