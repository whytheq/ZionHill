$(document).ready(function () {

    var x = 0;
    var s = "hello pluralsight"


    var button = $("#ToggleFormButton");
    button.on("click", function () {
        if (!$("#formdiv").is(":visible")) {
            $("#formdiv").show(3000)
        } else {
            $("#formdiv").hide("slow");
        }
    });

    var butt = $("#toggleItem");
    butt.on("click", function () {
        $("#loginBlock").slideToggle();
    });



    //var loginToggle = $("#login-block #toggleItem");
    //var popupForm = $("#login-block .popup-form");

    //loginToggle.on("click", function () {
    //    popupForm.hide();
    //    //console.log("you clicked on ");
    //});

    //<div id="login-block">
    //    <div id="toggleItem">Login</div>
    //    <div class="popup-form">





    var plantInfo = $(".specialist-plants li");
    plantInfo.on("click", function () {
        console.log("you clicked on " + $(this).text())
    });






});
