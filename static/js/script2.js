$( document ).ready(function() {
    $( "#sendButton" ).click(function(){
        console.log("working")
        getData()
    });
    function getData(type) {
        var type = document.getElementById("predictOpt");
        type = type.options[type.selectedIndex].text;
        type = JSON.stringify(type)
        var text2 = document.getElementById("inputText");
        text2 = text2.value;
        text2 = JSON.stringify(text2)
        $.post( "/postmethod", {
            data: type,
            text: text2
        });
    }
});

$("#charttype1").change(function (evt) {
    var chartSelection = $("#charttype1").val();
    var typeselection = $("#1type1").val();
    if (chartSelection == "hist"){
        var x = document.getElementById("2type1");
        var x2 = document.getElementById("2type2");
        var y1 = document.getElementById("1type1");
        x.style.display = "none";
        x2.style.display = "none";
        y1.style.display = "inline";
        drawHisto(typeselection);
    }
    else if (chartSelection == "scatter") {
        var typeselection1 = $("#2type1").val();
        var typeselection2 = $("#2type2").val();
        var x = document.getElementById("2type1");
        var x2 = document.getElementById("2type2");
        var y1 = document.getElementById("1type1");
        x.style.display = "inline";
        x2.style.display = "inline";
        y1.style.display = "none";
        drawScatter(typeselection1, typeselection2);
    }
});

$("#1type1").change(function (evt) {
    var typeselection = $("#1type1").val();
    drawHisto(typeselection);
});

$("#2type1").change(function (evt) {
    var typeselection = $("#2type1").val();
    var typeselection2 = $("#2type2").val();
    drawScatter(typeselection, typeselection2);
});

$("#2type2").change(function (evt) {
    var typeselection = $("#2type1").val();
    var typeselection2 = $("#2type2").val();
    drawScatter(typeselection, typeselection2);
});

$( "#vizButton" ).click(function(){
    var x = document.getElementById("vizButton");
    var y = document.getElementById("predButton");
    var z = document.getElementById("visualization");
    var z2 = document.getElementById("back");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    z2.style.display = "block";
});

$( "#predButton" ).click(function(){
    var x = document.getElementById("vizButton");
    var y = document.getElementById("predButton");
    var z = document.getElementById("prediction");
    var z2 = document.getElementById("back");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    z2.style.display = "block";
});

$( "#back" ).click(function(){
    var x = document.getElementById("vizButton");
    var y = document.getElementById("predButton");
    var z = document.getElementById("visualization");
    var z2 = document.getElementById("prediction");
    var z3 = document.getElementById("back");
    x.style.display = "inline";
    y.style.display = "inline";
    z.style.display = "none";
    z2.style.display = "none";
    z3.style.display = "none";
});

$( "#sendButton" ).click(function(){
    console.log("hello")
    $("#result").html(myFunc() + "");
});
