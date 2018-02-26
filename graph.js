

var c_container = document.createElement("div");
c_container.id = 'demo';
document.body.appendChild(c_container);

var menuElement = document.createElement("div");

menuElement.className="animated fadeInLeft";
menuElement.style.zIndex = 9999;
menuElement.style.display = "none";
menuElement.style.position = "absolute";
menuElement.style.background = "#d8ebf2";
menuElement.style.border = "1px solid #09c";
menuElement.style.padding = "10px";
menuElement.style.boxShadow="5px 5px 5px #227192"
menuElement.innerHTML = "Hello";

document.body.appendChild(menuElement);

var colors = ["#c45ae1","#bc46dd","#b531d9","#ae1dd6","#9f1bc3","#8f18b0","#7f169c","#6f1389","#5f1075","#500e62"];

function palette(min, max) {
    var d = (max-min)/2;
    return d3.scale.threshold()
        .range(['#c45ae1','#bc46dd'])
        .domain([min+1*d,min+2*d]);
}


var chart = new NetChart({
container: document.getElementById("demo"),


events: {

onRightClick: function (event, args) {
// the menu element is positioned based on the mouse pointer coordinates.
// if you need to position it based on the node, use NetChart.getNodeDimensions() method.
menuElement.style.display = "none";
menuElement.style.left = event.pageX + "px";
menuElement.style.top = event.pageY + "px";


// fill the menu element based on the node that was clicked.
if (args.clickNode) {

document.getElementById("info").innerHTML = args.clickNode.data.Reference;

} else if (args.clickLink) {
document.getElementById("info").innerHTML = args.clickLink.data.edge_Description;
} else {
document.getElementById("info").innerHTML = "Select Node/Edge";
}
event.preventDefault();
}
},


area: {
height: 500,
style: { fillColor: "#001931" }
},

data: {
url: "https://rawgit.com/GaborSzalai/some_graph/master/graph2.json"
},

style: {
nodeStyleFunction: function(node) {

node.fillColor=d3.interpolatePuRd(node.data.Score/10);
node.label = node.data.IngredientName;
node.labelStyle.textStyle.font = "12px Helvetica";
            node.labelStyle.textStyle.fillColor = "#fff";
            node.labelStyle.backgroundStyle.fillColor = "#001931";
			node.labelStyle.backgroundStyle.lineColor = "#39bcf3";
node.items = [
{
text: "" + node.data.Score,
aspectRatio: 0, //force single line
px: 0, py: 0, x: 0, y: -5,
textStyle: { fillColor: "white",font:"12px Arial"},
backgroundStyle: { 
	fillColor: "", 
	lineColor: "transparent",
}
}];
node.image = node.data.ShortName+".png";

},

linkStyleFunction: function(link) {
link.label = "";
link.toDecoration = "arrow";
link.fromDecoration = "circle";


},

linkLabel:{
textStyle:{font:"7px Arial"}

},

node: {
radius: 20,
imageCropping: false,
shadowBlur: 15,
shadowColor: "#262626"
},
nodeHovered: {
shadowColor: "white",
shadowBlur: 15,
},
nodeSelected: {
lineColor: null
},
selection: {
fillColor: null,
lineColor: null
},
nodeFocused: {
fillColor: "white",
lineColor: null,
shadowColor: "white",
shadowBlur: 10
}
},

legend: {
enabled: true,
padding: 6,
marker: { size: 22 },
maxLineSymbols: 12
},

layout: {

mode: "radial",
nodeSpacing: 45

},


navigation: { 
mode: "manual",
initialNodes:["n0","n1","n2","n3","n4","n5","n6","n7","n8","n9","n10"] },
theme: NetChart.themes.dark
});

