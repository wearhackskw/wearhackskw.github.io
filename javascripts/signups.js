function clearDescs(){
    $("#logo").css("display","none");
    $("#desc_hx").css("display","none");
    $("#desc_jr").css("display","none");
    $("#desc_sr").css("display","none");
    $("#desc_mr").css("display","none");
    $("#desc_vr").css("display","none");
    $("#desc_we").css("display","none");
    $("#desc_de").css("display","none");
    $("#desc_fi").css("display","none");
    $("#desc_lo").css("display","none");
    $("#desc_pr").css("display","none");
    $(".box_hx").removeClass("selected");
    $(".box_jr").removeClass("selected");
    $(".box_sr").removeClass("selected");
    $(".box_mr").removeClass("selected");
    $(".box_vr").removeClass("selected");
    $(".box_we").removeClass("selected");
    $(".box_de").removeClass("selected");
    $(".box_lo").removeClass("selected");
    $(".box_fi").removeClass("selected");
    $(".box_pr").removeClass("selected");
} 


$("document").ready(function(){
    $(".box_hx").click(
    function () {
        clearDescs();
        $("#desc_hx").css("display","block");
        $(".box_hx").addClass("selected");
    });
    $(".box_fi").click(
    function () {
        clearDescs();
        $("#desc_fi").css("display","block");
        $(".box_fi").addClass("selected")
    });
    $(".box_we").click(
    function () {
        clearDescs();
        $("#desc_we").css("display","block");
        $(".box_we").addClass("selected")
    });
    $(".box_de").click(
    function () {
        clearDescs();
        $("#desc_de").css("display","block");
        $(".box_de").addClass("selected")
    });
    $(".box_jr").click(
    function () {
        clearDescs();
        $("#desc_jr").css("display","block");
        $(".box_jr").addClass("selected")
    });
    $(".box_mr").click(
    function () {
        clearDescs();
        $("#desc_mr").css("display","block");
        $(".box_mr").addClass("selected")
    });
    $(".box_sr").click(
    function () {
        clearDescs();
        $("#desc_sr").css("display","block");
        $(".box_sr").addClass("selected")
    });
    $(".box_vr").click(
    function () {
        clearDescs();
        $("#desc_vr").css("display","block");
        $(".box_vr").addClass("selected")
    });
    $(".box_lo").click(
    function () {
        clearDescs();
        $("#desc_lo").css("display","block");
        $(".box_lo").addClass("selected")
    });
    $(".box_pr").click(
    function () {
        clearDescs();
        $("#desc_pr").css("display","block");
        $(".box_pr").addClass("selected")
    });
});