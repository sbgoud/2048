let newcolour = ["#DOFOCO", "#90FF90", "#98FF98", "#A7F432", "#7CFCOO", "#8FD400", "#32CD32",
     "#299617", "#228C22", "#138808", "#355E3B", "#00563F", "#005C29", "#004225", "#123524", "#013220" ];


function randomcolour() {
const targetelement = document.querySelectorAll('.tile.tile-2 .tile-inner');
 for(let i=0; i < targetelement.length; i++)
 {
const random = Math.floor(Math.random() * newcolour.length);
const colour = newcolour[random];
targetelement[i].style.background = colour;
 }
}
