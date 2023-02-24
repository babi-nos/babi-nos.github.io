<?php  
    $array = array("firstname" => "", "name" => "", "email" => "", "phone" => "", "message" => "" , "sujet" => "", "firstnameError" => "","nameError" => "","emailError" => "","phoneError" => "","messageError" => "" , "sujetError" => "" , "isSuccess" => false);
    
    $emailTo = "babibinos@gmail.com";  // emailTo = a qui je vais envoyer l'email avec les donner de mon formulaire


    if($_SERVER["REQUEST_METHOD"] == "POST") //Si l'utilisateur vien une dixieme fois les varaible seront remplis donc cela sera = a POST
    {
        $array["firstname"] = verifyInput($_POST['firstname']);
        $array["name"] = verifyInput($_POST['name']);
        $array["email"] = verifyInput($_POST['email']); 
        $array["phone"] = verifyInput($_POST['phone']);
        $array["message"] = ($_POST['message']);
        $array["sujet"] =  verifyInput($_POST['sujet']);    //SSSSSSSS 
        $array["isSuccess"] = true;                        //Si TOUT est bien remplie alors isSucces est = true donc le message de remerciement s'affiche
        $emailText = "";                                   //$emailText = la variable qui va stocker les donner donc je l'initie a vide

        if(empty($array["firstname"])){                        //empty = vide donc If si mon champs est empty (vide) Alors ...
            $array["firstnameError"] = "Your firstname ";    //voici le message d'erreur
            $array["isSuccess"] = false;                       //Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "FirstName: {$array["firstname"]}\n"; // {je dit a php qui va y avoir une variable avc {}}. /n = saut de lignes
        }
        if(empty($array["name"])){
            $array["nameError"] = "Your name ";             // voici le message d'erreur
            $array["isSuccess"] = false;                        // Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "Name: {$array["name"]}\n";           //Si il ne rentre pas dans le if alors else stock dans la varaible $emailText l'info. /n = saut de lignes
        }
        if(!isEmail($array["email"])){ // passe cet fonction a cet variable si la fonction n'est pas respecter alors la reponse = false alors emmailError ! = not
            $array["emailError"] = "This is not an email";
            $array["isSuccess"] = false;                  //Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "Email: {$array["email"]}\n";   //Si il ne rentre pas dans le if alors else stock dans la varaible $emailText l'info. /n = saut de lignes
        }
        if(!isPhone($array["phone"])){ // passe cet fonction a cet variable si la fonction n'est pas respecter alors la reponse est false alors phoneError ! = not
            $array["phoneError"] = "This is not a valid number";
            $array["isSuccess"] = false;                  //Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "phone: {$array["phone"]}\n";   //Si il ne rentre pas dans le if alors else stock dans la varaible $emailText l'info. /n = saut de lignes
        }
        if(empty($array["message"])){
            $array["messageError"] = "Tell me what you want to tell me";
            $array["isSuccess"] = false;                   //Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "Message: {$array["message"]}\n";//Si il ne rentre pas dans le if alors else stock dans la varaible $emailText l'info. /n = saut de lignes
        }
        if(empty($array["sujet"])){                        //empty = vide donc If si mon champs est empty (vide) Alors ...
            $array["sujetError"] = "What do you want to talk to me about?";    //voici le message d'erreur
            $array["isSuccess"] = false;                       //Si il y a une erreur $isSucess c'est a dire mon message de remerciment=false il ne s'affiche pas
        }else{
            $emailText .= "Sujet: {$array["sujet"]}\n"; // {je dit a php qui va y avoir une variable avc {}}. /n = saut de lignes
        }
        if($array["isSuccess"]){                           // voici le if: if(si $isSucces = true) alors envoi moi l'email avec les donner recuperer
            $headers = "From: {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
            mail($emailTo, $array["sujet"], $emailText , $headers);
        }

        echo json_encode($array);    //Ici je renvoi le travail de ce php voici le result de notre php
    }
    
    function isPhone($var){
        return preg_match("/^[0-9 ]*$/" , $var);     // cet fonction permet davoir un numero valable. c'est une expression reguliere. +$ oblige 1 chhifre
    }

    function isEmail($var){
        return filter_var($var, FILTER_VALIDATE_EMAIL); // La fonction filter_var va nous renvoyer false si l'email est faux va mettre true si il est vrai
    }

    function verifyInput($var){
        $var = trim($var); // trim = enlevr tout ce qui est espace aller a la lignes ...
        $var = stripslashes($var); // stripslashes =  enleve tout les /\ 
        $var = htmlspecialchars($var); //  Convertit les caractères spéciaux en entités HTML. evite l'ensauvagement par script.

        return $var; // je reourne ma variable de base car ici on empeche juste les hacker de transformer ou prendre quelque choses
    }
?>
