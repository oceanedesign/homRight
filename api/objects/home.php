<?php
require_once('../errors.php');
require_once('table.php');

class Home extends Table {
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
        
        return array("status" => "success");
    }
}
