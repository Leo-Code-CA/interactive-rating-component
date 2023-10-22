$(document).ready(function() {

    let num = "";

    $(".box__rate-btn").click(function() {
        $(".box__rate-btn").removeClass("active");
        $(this).addClass("active");
        num = $(this).text();
    });

    $(".box__btn").click(function() {
        $(".box__rating-message").text("You selected " + num + " out of 5");
        $(".attribution").show(500);
        $(".state1").hide();
        $(".state2").show();
    });

});