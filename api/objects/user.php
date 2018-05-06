<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of user
 *
 * @author co59
 */
include_once('../errors.php');

header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Origin:*');

	header('Content-Type: application/json;charset=UTF-8');
	header('Access-Control-Allow-Methods: DELETE, HEAD, GET, OPTIONS, POST, PUT');
	header('Access-Control-Allow-Headers: : Origin, Content-Type, X-Auth-Token , Authorization');
	header('Access-Control-Max-Age: 1728000');

class User {
    //Variables privées
    private $db_connection  = null;
    private $table_name     = "user";
    private $properties     = array();
    
    //Variables publiques
    public $columns         = array();
    
    public function __construct($database) {
        $this->db_connection = $database;
        
        //Récupérer les colonnes de la table
        // /!\ table_name doit être hardcodé -> risque d'injection sql
        $req = "show columns from " . $this->table_name;
        $result = $this->connection->query($req);
        
        if(! $result) {
            return errors("db_SendRequest", "Erreur lors de la récupération des colonnes");
        }
        
        while ($row = $result->fetch_assoc()) {
            $this->columns[] = $row["Field"];
            $this->properties[$row["Field"]] = null;
        }
        $result->free();
    }
    
    public function set_property($name, $value) {
        if (! array_key_exists($name, $this->properties)) {
            return errors("UnknownProperty", "une propriété n'existe pas");
        }
        //TODO: Filter/valider les informations de $value
        $this->properties[$name] = $value;
        
        return true;
    }
    
    public function create() {
        $fields = array("pseudo", "nom", "prenom", "password", "email", "date_creation", "longitude", "latitude", "point", "point_niv", "email_n", "push");
        $request = "INSERT INTO user(pseudo, nom, prenom, password, email, date_creation, longitude, latitude, point, point_niv, email_n, push) VALUES('$pseudo', '$nom', '$prenom', '$password', '$email', '$date_creation','$longitude','$latitude', 50, 50, 1, 1)";
        
        //Prépare la requête
        if (! $stmt = mysqli_prepare($this->db_connection, $request)) {
            return errors("db_PrepareRequest", "Erreur lors de la préparation d'une requête");
        }
        
        //Affectuer les valeurs dans la requête
        foreach ($fields as $field) {
            if(! $stmt->bind_param("s", $this->properties[$field])) {
                return errors("db_BindParam", "Erreur lors de préparation d'une requête");
            }
        }
            
        //Executer la requête
        if (! $stmt->execute()) {
            return errors("db_Execute", "Erreur lors de  l'execution d'une requête");
        }
        
        $stmt->close();
        return true;
    }        
}