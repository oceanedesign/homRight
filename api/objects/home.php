<?php
require_once '../get_token.php';
require_once('../errors.php');
require_once('table.php');

class Home extends Table {
    
    private function _set_id_by_linky() {
        $request = "SELECT maison_id from " . $this->table_name . " where compt_linky=:compt_linky";
        
        //Préparer la requête
        try {
            $stmt = $this->PDO_object->prepare($request);
        } catch (PDOException $ex) {
            return errors("PDOException", $ex->getMessage());
        }
        
        if (! $stmt) {
            return errors("Home_prepare", $stmt->errorInfo()[2]);
        }
        
        //Lier les données dans la requête
        if(! $stmt->bindParam(":compt_linky", $this->properties["compt_linky"])) {
            return errors("Home_bindParam", $stmt->errorInfo()[2]);
        }
        
        //Exécuter la requête
        if (! $stmt->execute()) {
            return errors("Home_execute", $stmt->errorInfo()[2]);
        }
        
        //Vérifier qu'il existe qu'un seul compteur (devrait jamais arriver)
        if ($stmt->rowCount() != 1) {
            return errors("Home_count", "Le compteur n'existe pas ou est déjà utilisé");
        }
        
        $this->set_property_value("maison_id", $stmt->fetch(PDO::FETCH_ASSOC)["maison_id"]);
        return $this->properties["maison_id"];
    }
    
    //-----METHODES PUBLIQUES
    public function __construct($database) {
        parent::__construct($database, "maison");
    }
    
    
    public function create() {
        $request = $this->db_connection->build_insert_request($this->table_name, $this->properties);

        //Préparer la requête
        try {
            $stmt = $this->PDO_object->prepare($request);
        } catch (PDOException $ex) {
            return errors("PDOException", $ex->getMessage());
        }
        
        if(! $stmt) {
            return errors("Home_prepare", $stmt->errorInfo()[2]);
        }

        //Lier les données dans la requête
        foreach(array_keys($this->properties) as $column) {
            if(! $stmt->bindParam(":$column", $this->properties[$column])) {
                return errors("Home_bindParam", $stmt->errorInfo()[2]);
            }
        }
        
        //Executer la requête
        if (! $stmt->execute()) {
            return errors("Home_execute", $stmt->errorInfo()[2]);
        }
        
        //Récupérer l'id de la maison via l'identifiant linky
        $this->_set_id_by_linky();
        
        return array("status" => "success");
    }
    
}
