import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import{SignupPage} from "../signup/signup";
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';

//import { LottieAnimationViewModule } from 'ng-lottie';


declare var $:any;

@IonicPage({
  name: 'page-login',
  segment: 'page-login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	tabBarElement: any;
  public lottieConfig:any;
  splash = true;
	connexionType: string ="connexion";

  coData = {"pseudo":"", "password":""};

  regData = {"pseudo":"", "password":"", "nom": "", "prenom": "","email": "","latitude": "","longitude": ""};
  latitude : any;
  longitude : any;

  users: String;


  	constructor(public navCtrl: NavController, public authServiceProvider : AuthServiceProvider, public geo: Geolocation, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
     //Fonction qui s'active au chargement de la page
    setTimeout(() => {
      //lorsque le temps est écoulé, le splashscreen s'enleve
      this.splash = false;
    }, 6500);
      this.geo.getCurrentPosition().then(pos=>{
        //récupere la géolocalisation
      this.latitude = pos.coords.latitude;     
      this.longitude = pos.coords.longitude;
    }).catch(err => console.log(err));
  }

  register() {
    //Fonction permettant d'enregistrer un nouveau utilisateur dans la base de données

    //Attribut la latitude au json
    this.regData.latitude = this.latitude;
    //Attribut la longitude au json
    this.regData.longitude = this.longitude;
    console.log(this.regData);

    //Envoi au serveur le json   
    this.authServiceProvider.postData(this.regData,'users/create.php').then((result) => {
      console.log("J'ai envoyé les donnees.")
        if (JSON.parse(result['_body']).hasOwnProperty("status") && JSON.parse(result['_body']).status == "error") {
          // s'il y a une erreur
            this.presentToastInscription();
            //prevenir l'utilisateur
        } else {
          //Récupere le token de l'utilisateur
          var $my_token = JSON.parse(result['_body']).token;
          this.authServiceProvider.token = $my_token;

          //Récupere son pseudo
          var pseudo = JSON.parse(result['_body']).pseudo;          
          this.authServiceProvider.pseudo = pseudo;
          let headers = new Headers();
          headers.append('Token', this.authServiceProvider.token);


          this.navCtrl.push(SignupPage);
          //sinon passer à l'écran suivant
        }

    }, (error) => {
      //erreur coté serveur
        console.log(error);
        console.log("ça ne marche pas");
    });
  }

  presentToastInscription() {
    //Définit le message "pseudo deja utilisé" lorsqu'un utilisateur essaye de s'inscrire avec un pseudo
    // déjà existant dans la base de données
    let toast = this.toastCtrl.create({
        message: "Pseudo déjà utilisé",
        duration: 3000
      });
    toast.present();
  }

  connexion(){
  // fonction permettant à l'utilisateur de se connecter s'il est déjà inscrit dans la bdd

    //Envoi au serveur le json   
    this.authServiceProvider.postData(this.coData,'users/get.php').then((result) => {
      console.log("J'ai envoyé les donnees.")
        if (JSON.parse(result['_body']).hasOwnProperty("status") && JSON.parse(result['_body']).status == "error") {
        // s'il y a une erreur
            this. presentToastConnexion();
            //prevenir l'utilisateur
        } else {   
          //sinon passer à l'écran HomePage     
          this.navCtrl.push(HomePage);
          var $my_token = JSON.parse(result['_body']).token;
          this.authServiceProvider.token = $my_token;

          //Récupere son pseudo
          var pseudo = JSON.parse(result['_body']).pseudo;          
          this.authServiceProvider.pseudo = pseudo;
          
          let headers = new Headers();
          headers.append('Token', this.authServiceProvider.token);
        }
    }, (error) => {
      //erreur coté serveur
        console.log(error);
        console.log("ça ne marche pas");
    });
  }

  presentToastConnexion() {
    //Définit le message "Pseudo ou mot de passe incorrecte" lorsqu'un utilisateur essaye de se connecter
    //avec des erreurs
    let toast = this.toastCtrl.create({
        message: "Pseudo ou mot de passe incorrecte",
        duration: 3000
      });
    toast.present();
  }

}