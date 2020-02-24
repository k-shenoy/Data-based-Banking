$("#charttype1").change(function (evt) {
    var chartSelection = $("#charttype1").val();
    if (chartSelection == "scatter"){
        scatterGraph();
    }
    else if (chartSelection == "hist") {
        histoGraph();
    }
});

function scatterGraph() {
    console.log("Scatter");
}

function histoGraph() {
    console.log("Histo");
}
