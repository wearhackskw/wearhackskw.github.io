/*$("document").ready(function(){
    $(".box_hx").hover(
    function () {
        $("#logo").fadeOut("10");
        $("#desc_hx").fadeIn("500");
    },
    function () {
        $("#desc_hx").fadeOut("10");
        $("#logo").fadeIn("500");
    });
});*/

/*$("document").ready(function(){
    $(".box_hx").hover(
    function () {
        $("#logo").css("visibility","hidden");
        $("#desc_hx").css("visibility","visible");
    },
    function () {
        $("#desc_hx").css("visibility","hidden");
        $("#logo").css("visibility","visible");
    });
});*/

$("document").ready(function(){
    $(".box_hx").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_hx").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_hx").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_jr").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_jr").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_jr").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_sr").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_sr").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_sr").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_mr").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_mr").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_mr").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_vr").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_vr").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_vr").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_de").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_de").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_de").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_fi").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_fi").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_fi").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_lo").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_lo").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_lo").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_pr").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_pr").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_pr").css("display","none");
        $("#logo").css("display","block");
    });
    
    $(".box_we").hover(
    function () {
        $('.signupbtn').css("display","none");
        $("#logo").css("display","none");
        $("#desc_we").css("display","block");
    },
    function () {
        $('.signupbtn').css("display","inline-flex");
        $("#desc_we").css("display","none");
        $("#logo").css("display","block");
    });
});