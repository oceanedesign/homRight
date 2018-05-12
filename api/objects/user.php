<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of user
 *
 */
require_once('../errors.php');

class User {
    //Variables privées
    private $db_connection  = null;
    private $table_name     = "user";

    //Variables publiques
    public $properties     = array();
    
    //-----METHODES PRIVEES
    private function _init_properties() {
        $stmt = $this->db_connection->get_columns_by_table_name($this->table_name);
        check_error($stmt);
        for ($i = 0; $i < $stmt->rowCount(); $i++) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_ABS, $i);
            
            // Ignorer le champ date_creation -> rempli automatiquement par mysql
            if($row["Field"] == "date_creation") {
                continue;
            }
            
            $this->properties[$row["Field"]] = "";
        }

             //       var_dump($this->properties);
            //die();

    }
    
    private function _generate_token($strong) {
        return bin2hex(openssl_random_pseudo_bytes(128, $strong));
    }
    //-----FIN METHODES PRIVEES
    
//-----METHODES PUBLIQUES
    public function __construct($database) {
        $this->db_connection = $database;
        $this->PDO_object = $database->get_connection();
        $this->_init_properties();
    }
    
    public function set_property($name, $value) {
        if (!in_array($name, array_keys($this->properties))) {
            return errors("User_setproperty", "La propriété $name n'existe pas");
        }
        
        $this->properties[$name] = $value; 
    }
    
    public function create() {
        //Fixer les valeurs par défaut
        $default_values = array("email_n" => 1, "push" => 1, "point" => 50, "point_niv" => 50, "token" => $this->_generate_token(true));
        $this->properties = array_merge($this->properties, $default_values);
        
        //Hash le mot de passe avant de l'insérer dans la base
        $this->properties["password"] = hash("sha1", $this->properties["password"]);
        
        $request = $this->db_connection->build_insert_request($this->table_name, $this->properties);
        
        //Préparer la requête
        try {
            $stmt = $this->PDO_object->prepare($request);
        } catch (PDOException $ex) {
            return errors("PDOException", $ex->getMessage());
        }
        
        if(! $stmt) {
            return errors("User_prepare", "Erreur lors de la préparation de la requête $request");
        }

        //Lier les données dans la requête
        foreach(array_keys($this->properties) as $column) {
            if(! $stmt->bindParam(":$column", $this->properties[$column])) {
                return errors("User_bindParam", "Erreur lors de la liaison de donnée");
            }
        }
        
        //Executer la requête
        $pseudo = $this->properties["pseudo"];
        if (! $stmt->execute())
         {
            return errors("User_execute", "{'message':$pseudo}");
        }
        
        return array("token" => $this->properties["token"]);
    }   
    
    public function get_by_pseudo_and_password($pseudo, $passwd) {
        $passwd = hash("sha1", $passwd);
        $request = "SELECT * from $this->table_name WHERE pseudo=:pseudo AND password=:password";
        
        //Préparer la requête
        try {
            $stmt = $this->PDO_object->prepare($request);
        } catch (PDOException $ex) {
            return errors("PDOException", $ex->getMessage());
        }
        
        if(! $stmt) {
            return errors("User_prepare", "Erreur lors de la préparation de la requête $request");
        }
        
        if (! ($stmt->bindParam(":pseudo", $pseudo) and $stmt->bindParam(":password", $passwd))) {
                return errors("User_bindParam", "Erreur lors de la liaison de donnée");
        }
        
        //Executer la requête
        if (! $stmt->execute()) {
            return errors("User_execute", "Erreur lors de l'execution d'une requete");
        }
        
        //Vérifier qu'il existe 1 élément
        if ($stmt->rowCount() != 1) {
            return errors("User_count", "Le pseudo [$pseudo] n'existe pas");
        }
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    //-----FIN METHODES PUBLIQUES
}
