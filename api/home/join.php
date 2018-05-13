<?php
require_once("../get_token.php");
require_once("../config/database.php");
require_once("../objects/user_has_home.php");

//Initialiser la connexion
$db = new Database();

//Vérifier que l'objet n'a pas retourné d'erreur
check_error($db);

//Initialiser l'objet home
$user_has_maison = new User_has_home($db);

//Vérifier que l'objet n'a pas retourné d'erreur
check_error($user_has_maison);

//Récupérer les données au format json
$json_data = json_decode(file_get_contents('php://input'), true);

//Vérifier que le json a été parsé correctement et qu'il n'est pas nul
if ($json_data == null) {
    check_error(errors("Join_get_contents", "Le fichier json est vide"));
}

//Vérfier que la clé nom existe dans le json
if (! array_key_exists("nom", $json_data)) {
    check_error(errors("Join_json_keys", "L'entrée est invalide")); 
}

check_error($user_has_maison->create($token=get_token(), array("nom" => $json_data["nom"])));



