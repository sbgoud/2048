



var colour = "#";
function colours() {
  
    var letters = "0123456789ABCDEF";
    var colour = "#";
    for (var j = 0; j < 6; j++) {
      colour += letters[Math.floor(Math.random() * 16)];
      return;
    }
}
const targetelement = 0;
function randomcolour2() {
  console.log(colour);
  for (let i = 0; i < targetelement.length; i++) {
  targetelement = document.querySelectorAll(".tile.tile-2 .tile-inner");
  
targetelement[i].style.background = colour;
  }
}
