<?php
require_once("../get_token.php");
require_once("../errors.php");
require_once("../config/database.php");
require_once("../objects/home.php");

//Initialiser la connexion
$db = new Database();

//Vérifier que l'objet n'a pas retourné d'erreur
check_error($db);

//Initialiser l'objet home
$home = new Home($db);

//Vérifier que l'objet n'a pas retourné d'erreur
check_error($home);

$homes = array();
$stmt = $home->get_by_name_and_cp();

check_error($stmt);

//Filtrer les valeurs retournées
foreach ($stmt->fetch(PDO::FETCH_ASSOC) as $key => $value) {
    $tmp = array();
    foreach($value as $key => $value) {
        $tmp[$key] = htmlentities($value);
    }
    $homes[] = $tmp;
}

success("Les nom des maisons ont été récupérés", array("names" => $homes));