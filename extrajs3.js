function randomcolour2() {
  const targetelement = document.querySelectorAll(".tile.tile-2 .tile-inner");
  for (let i = 0; i < targetelement.length; i++) {
    var letters = "0123456789ABCDEF";
    var colour = "#";
    for (var j = 0; j < 6; j++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    console.log(colour);
    targetelement[i].style.background = colour;
  }
}

function randomcolour4() {
    const targetelement = document.querySelectorAll(".tile.tile-4 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  
  function randomcolour8() {
    const targetelement = document.querySelectorAll(".tile.tile-8 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  
  function randomcolour16() {
    const targetelement = document.querySelectorAll(".tile.tile-16 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour32() {
    const targetelement = document.querySelectorAll(".tile.tile-32 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour64() {
    const targetelement = document.querySelectorAll(".tile.tile-64 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour128() {
    const targetelement = document.querySelectorAll(".tile.tile-128 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour256() {
    const targetelement = document.querySelectorAll(".tile.tile-256 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour512() {
    const targetelement = document.querySelectorAll(".tile.tile-512 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function randomcolour1024() {
    const targetelement = document.querySelectorAll(".tile.tile-1024 .tile-inner");
    for (let i = 0; i < targetelement.length; i++) {
      var letters = "0123456789ABCDEF";
      var colour = "#";
      for (var j = 0; j < 6; j++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      console.log(colour);
      targetelement[i].style.background = colour;
    }
  }
  function colourall(){

randomcolour1024();
randomcolour512();
randomcolour256();
randomcolour128();
randomcolour64();
randomcolour32();
randomcolour16();
randomcolour8();
randomcolour4();
randomcolour2();
  }