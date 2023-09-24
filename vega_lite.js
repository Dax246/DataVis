

var vg_2 = "map.vg.json";
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);