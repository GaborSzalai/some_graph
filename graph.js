

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
style: { fillColor: "rgba(14,33,40,0.9)" }
},

data: {
url: "https://rawgit.com/GaborSzalai/some_graph/master/graph2.json"
},

style: {
nodeStyleFunction: function(node) {
node.label = node.data.IngredientName;
node.items = [
{
text: "Score: " + node.data.Score,
aspectRatio: 0, //force single line
px: 0, py: -1, x: 0, y: -5,
textStyle: { fillColor: "white" },
backgroundStyle: { 
	fillColor: "#09c", 
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
initialNodes:["n0","n1","n2","n3","n4","n5","n6","n7","n8","n9","n10"] },
theme: NetChart.themes.dark
});

