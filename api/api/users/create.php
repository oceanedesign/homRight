<?php
        include_once("../config/database.php");
        include_once("../objects/user.php");
        include_once("../errors.php");
        


	header('Access-Control-Allow-Origin:*');
	header('Content-Type: application/json;charset=UTF-8');
	header('Access-Control-Allow-Methods: DELETE, HEAD, GET, OPTIONS, POST, PUT');
	header('Access-Control-Allow-Headers: : Origin, Content-Type, X-Auth-Token , Authorization');
	header('Access-Control-Max-Age: 1728000');
        
        //Initialiser la connexion
        $db_connection = (new Database())->getConnection();
        
        //Vérifier que l'objet n'a pas retourné d'erreur
        check_error($db_connection);
        
        //Initialiser l'objet user
        $user = new User();
        
        //Vérifier que l'objet n'a pas retourné d'erreur
        check_error($user);
        
        //Récupérer les données au format json
        $json_data = json_decode(file_get_contents('php://input'), true);
        
        //Affecter les valeurs 
        foreach ($user->columns as $column) {
            if (array_key_exists($column, $json_data)) {
                $ret = $user->set_property($column, $json_data[$column]);
                
                //Vérifier que la fonction n'a pas retournée d'erreur
                check_error($ret);
            }
        }
        
        check_error($user->create());