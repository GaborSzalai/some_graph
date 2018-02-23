var chartContainer = document.createElement("div");
chartContainer.id = 'chart';
document.body.appendChild(chartContainer)


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


var chart = new NetChart({
container: document.getElementById("chart"),


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
style: { fillColor: "rgba(14,33,40,0.9)" }
},

auras: {
cellSize: 20,
overlap: true,
enabled: true,
defaultStyle: {
showInLegend: true,
shadowBlur: 35
},
style: {

"Targeting": {
fillColor: "rgba(53,135,136,0.3)",
shadowColor: "rgba(53,135,136,0.7)",
},
"Profiling": {
fillColor: "rgba(111,82,184,0.6)",
shadowColor: "rgba(111,82,184,0.6)",
},
"Happiness": {
fillColor: "rgba(39,156,254,0.7)",
shadowColor: "rgba(39,156,254,0.7)",
}
}
},
data: {
url: "https://rawgit.com/GaborSzalai/some_graph/master/graph2.json"
},
layout: {
nodeSpacing: 30
},
style: {
nodeStyleFunction: function(node) {
node.aura = node.data.auras;
node.label = node.data.ProjectName;
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


nodeLabel:{
textStyle:{font:"12px Arial"}

},

node: {
radius: 20,
imageCropping: false,
fillColor: "rgba(14,33,40,0.9)",
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
initialNodes: ["-4962768464952426496"] },
theme: NetChart.themes.dark
});


