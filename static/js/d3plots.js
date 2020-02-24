var graphData;

function dataInitialGet(data) {
    console.log(data);
    graphData = data;
}

function lineGraph(){
    var margin = {top: 30, right: 50, bottom: 30, left: 50};
    var svgWidth = 600;
    var svgHeight = 270;
    var graphWidth = svgWidth - margin.left - margin.right;
    var graphHeight = svgHeight - margin.top - margin.bottom;
    var x = d3.scale.linear().range([0, graphWidth]);
    var y = d3.scale.linear().range([graphHeight, 0]);
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);
    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);
    var indivLine = d3.svg.line()
        .x(function(d) { return x(d.total); })
        .y(function(d) { return y(d.indiv); });
    var avgLine = d3.svg.line()
        .x(function(d) { return x(d.total); })
        .y(function(d) { return y(d.avg); });
    var svg = d3.select("#graphDiv")
        .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
        .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
    console.log(graphData);
    drawLineGraph(graphData)
}

// define function
function drawLineGraph(data) {
    // For each row in the data, parse the date
    // and use + to make sure data is numerical
    data.forEach(function(d) {
        d.High = +d.indiv;
        d.Close = +d.avg;
    });
    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.total; }));
    y.domain([d3.min(data, function(d) {
        return Math.min(d.High, d.Close) }),
        d3.max(data, function(d) {
        return Math.max(d.High, d.Close) })]);
    // Add the highLine as a green line
    svg.append("path")
        .style("stroke", "green")
        .style("fill", "none")
        .attr("class", "line")
        .attr("d", indivLine(data));
    // Add the lowLine as a red dashed line
    svg.append("path")
        .style("stroke", "red")
        .attr("d", avgLine(data));
    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + graphHeight + ")")
        .call(xAxis);
    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    // Add the text for the "High" line
    svg.append("text")
        .attr("transform", "translate("+(graphWidth+3)+","+y(graphData[0].High)+")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "green")
        .text("High");
    // Add the text for the "Low" line
    svg.append("text")
        .attr("transform", "translate("+(graphWidth+3)+","+y(graphData[0].Close)+")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "red")
        .text("Low");
};

lineGraph();
