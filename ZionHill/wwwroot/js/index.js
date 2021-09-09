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



    var plantInfo = $(".specialist-plants li");
    plantInfo.on("click", function () {
        console.log("you clicked on " + $(this).text())
    })

});
