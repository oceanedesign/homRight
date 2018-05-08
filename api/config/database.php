<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of database
 *
 * @author 
 */
include_once('../errors.php');

header('Access-Control-Allow-Origin:*');

class Database {
    //Propriétés privées
    //Détails de configuration
    private $host   = "localhost";
    private $name   = "homright";
    private $user   = "root";
    private $passwd = "";
    
    //Propriétés publiques
    public $connection = null;
    
    public function __destruct() {
        $this->connection.close();
    }
    
    public function getConnection() {
        //Connexion à la base de données
        $this->connection = new mysqli($this->host, $this->user, $this->passwd, $this->name);
        
        //Vérifier la connexion
        $errno = mysqli_connect_errno();
        if ($errno) {
            return errors("db_Connection", "Erreur [" . $errno . "] lors de la connexion à la base de données");
        }
        
        // Forcer l'encodage en UTF-8
        if ($this->connection->character_set_name() != "utf8mb4") {
            $this->connection->set_charset("utf-8");
        }
        
        return $this->connection;
    }
}