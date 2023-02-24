$(function (){                                    // racourci pour direct quand j'ouvre ma page ready
    $('#contact-form').submit(function(e) {       // Tout ce qui suis en dessous ne marchera que si Event est fait c'est a dire cliquer sur le button submit

        e.preventDefault();                       // cet fonction me permet d'enlever les valeur par defaut d'un formulaire c a dire que il n'ira plus en haut
        $('.comments').empty();
        var postdata = $('#contact-form').serialize(); // Je met tout mes donner dans une nouvelle variable post data je la serialize 

        $.ajax({
            type: 'POST',
            url: "php/contact.php",
            data: postdata, 
            dataType: 'json',
            success: function(result) {
                if(result.isSuccess){        // es ce que isSucces est true 
                    $("#contact-form").append("<p class='thank-you'>Votre message a bien été envoyé. merci !</p>");
                    $(".thank-you").slideUp(12000);
                    $("#contact-form")[0].reset();
                }
                else{ 
                    $("#firstname + .comments").html(result.firstnameError);
                    $("#name + .comments").html(result.nameError);
                    $("#email + .comments").html(result.emailError);
                    $("#phone + .comments").html(result.phoneError);
                    $("#sujet + .comments").html(result.sujetError);
                    $("#message + .comments").html(result.messageError);
                }
            }
        });

    });
}) 


