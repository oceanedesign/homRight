<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');


function errors($type, $msg) {
    $err = array(
        "status" => "error",
        "type" => $type,
        "message" => $msg
    );
    
    return $err;
}

function check_error($obj) {
    //Vérifier que l'objet n'a pas retourné d'erreur
    if (is_array($obj) && array_key_exists("status", $obj) && $obj["status"] == "error") {
        echo json_encode($obj);
        die();
    }
}

function success() {
    $msg = array("status" => "success");
    echo json_encode($msg);
}