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

$stmt = $home->get_address_by_token(get_token());

check_error($stmt);

$addresses = array();

//Filtrer les valeurs retournées
for ($i = 0; $i < $stmt->rowCount(); $i++) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_ABS, $i);
    $tmp = array();
    
    foreach($row as $key => $value) {
        $tmp[$key] = htmlentities($value);
    }
    
    $addresses[] = $tmp;
}

success("Les adresses des maisons ont été récupérés", array("addresses" => $addresses));