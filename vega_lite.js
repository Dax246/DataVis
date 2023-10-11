var vg_1 = "map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "barchart.vg.json";
vegaEmbed("#bar_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// var vg_3 = "horizontal_barchart.vg.json";
// vegaEmbed("#horizontal_bar_chart", vg_3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

var vg_4 = "scatterplot.vg.json";
vegaEmbed("#scatterplot", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "stackedbarchart.vg.json";
vegaEmbed("#stackedbar_chart", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);