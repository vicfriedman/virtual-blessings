var firstOverlay = document.getElementById("first-overlay");
var secondOverlay = document.getElementById("second-overlay");
var yes = document.querySelector(".yes-bless");

function overlay(overlay) {
  overlay.style.visibility = (overlay.style.visibility == "visible") ? "hidden" : "visible";
}

function load(){
  if (window.location.href.includes("/virtual_blessings/index.html")){
    overlay(firstOverlay);
  }
}

load();

//click yes

yes.addEventListener("click", function(){
  firstOverlay.style.visibility = "hidden";
  overlay(secondOverlay);
  writeBlessing();
});
//click no

//click x

//write out text

function loadWord(){
  var blessingSpot = document.querySelector(".blessing");
  for (var i = 0; i < paragraphNodes.length - 1; i++){
    //need to figure out how to delay loading of words - happens immediately
    blessingSpot.appendChild(paragraphNodes[i]);
  }
}

function writeBlessing(){
  var paragraph = "Chupa chups bear claw tiramisu sugar plum wafer pudding. Cake cake lemon drops ice cream cake danish jelly tiramisu bonbon. Icing donut lemon drops.";
  var paragraphSplit = paragraph.split(" ");
  paragraphNodes = []
  for (var i = 0; i < paragraphSplit.length; i++) {
    paragraphNodes.push(document.createTextNode(paragraphSplit[i] + " "));
  }
  loadWord();

}

