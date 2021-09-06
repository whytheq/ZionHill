var x = 0;
var s = "hello pluralsight"





var button =$("#ToggleFormButton");
button.on("click", function () {
    if (!$("#formdiv").is(":visible")) {
        $("#formdiv").show(2000)
    } else {
        $("#formdiv").hide("slow")
    }
})


var plantInfo = document.getElementsByClassName("specialist-plants");
