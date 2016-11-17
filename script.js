document.addEventListener("DOMContentLoaded", queryDatabase);
var APIkey = "UUiVo4LrNsvaaXgsfqTdcKDI9xfv46t1C4T3qQty";

function queryDatabase(event) {
        var req = new XMLHttpRequest();
        req.open("GET", "http://api.nal.usda.gov/ndb/reports/?api_key=" +
        APIkey + "&ndbno=21299&type=b&format=json");
        req.addEventListener("load", function() {
            var response = JSON.parse(req.responseText);
            var energy = response.report.food.nutrients.find(function(nutrient) {
                return nutrient.nutrient_id=="208";
            }).measures.find(function(measure) {
                return measure.label=="slice";
            }).value;
            console.log("Cheese pizza has " + energy + " calories per slice!");
        });
        req.send(null);
}