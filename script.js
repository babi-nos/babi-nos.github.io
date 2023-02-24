$(function(){ 

    $(".show").hide();

    $(".hide").click(function(){
        $('.picture').hide("#Javascript");
        $('.hide').hide();
        $('.show').show(475);
        $('.arrow1').hide('#javascript');
    });


    $(".show").click(function(){
        $('.picture').show();
        $('.hide').show();
        $('.show').hide();
        $('.arrow1').show();
    });

    //ANIMATION JQUERY

    $('.anim').hide(); //  je fais disparaitre a section
    $('.jq-image2').hide(); // Je fais disparaitre ma 2éme image 

    $(".btn").click(function(){
        $(".container-btn").hide(1000);
        $(".anim").show(1000);
        // $("#javascript").css("padding-bottom","0px");
    });

    $(".jq-image1").mouseenter(function(){
        $(".jq-image1").hide();
        $(".jq-image2").show();
        $(".jq-image2").css("cursor","pointer");
    })

    $(".jq-image2").mouseleave(function(){
        $(".jq-image2").hide();
        $(".jq-image1").show();
    })

    $(".jq-image2").click(function(){
        // $(".jquery2").slideUp(2000).fadeOut(2000).fadeIn(2000),
        $(".container-btn").show(2000);
        $(".anim").hide(1000);
    })



});


