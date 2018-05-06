<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
header('Access-Control-Allow-Origin:*');

function errors($type, $msg) {
    $err = array(
        "errors" => array(
            "type" => $type,
            "message" => $msg
        )
    );
    
    return $err;
}

function check_error($obj) {
    //Vérifier que l'objet n'a pas retourné d'erreur
    if (is_array($obj) && array_key_exists("errors", $obj)) {
        echo json_encode($obj);
        die();
    }
}