//Fonctionnalite 1:
var clickerFooter = document.getElementsByTagName("footer")[0]

var onFooterClick = function(){
  console.log("Clique, mais cliiiiiique")
}
clickerFooter.addEventListener("click", onFooterClick)

//Fonctionnalité 1-bis:

var clickerFooterBis = document.getElementsByTagName("footer")[0]
var count = 0
var onFooterClickBis = function(){
  count = count+1;
  console.log(`Clique ${count}`);
}
clickerFooterBis.addEventListener("click", onFooterClickBis);

//Fonctionnalité 2 :
var clickerHamburger = document.getElementsByClassName("navbar-toggler")[0]
var clickerNavbar = document.getElementById("navbarHeader")

var onHamburgerClick = function(){
  clickerNavbar.classList.toggle("collapse")
}
clickerHamburger.addEventListener("click", onHamburgerClick);

//Fonctionnalité 3 :
let textCard = document.getElementsByClassName("card-text")[0]
let clickerToEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

var onClickerEdit = function(){
  textCard.classList.add("text-danger")
}
clickerToEdit.addEventListener("click", onClickerEdit);

//Fonctionnalité 4 :
let textSecondCard = document.getElementsByClassName("card-text")[1]
let clickerToSecondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]

var onClickerSecEdit = function(){
  textSecondCard.classList.toggle("text-success")
}
clickerToSecondEdit.addEventListener("click", onClickerSecEdit);

//Fonctionnalité 5 :
var clickerNavbarNuc = document.getElementsByClassName("navbar")[0]

clickerNavbarNuc .addEventListener('dblclick', function () {
  if ( document.getElementsByTagName("link")[0].disabled == true){
       document.getElementsByTagName("link")[0].disabled = false;
} else {
  document.getElementsByTagName("link")[0].disabled = true;
}
});

//Fonctionnalité 6 :
var viewButton = document.getElementsByClassName("button.btn.btn-sm.btn-success")
var selectTextCard = document.querySelectorAll(".card-text")
var selectImg = document.querySelectorAll("div.card.mb-4.box-shadow img.card-img-top")

selectImg.forEach(element => element.classList.add ("w-25"))

var changeStyle = function(){
  
  selectTextCard.forEach(element => element.hidden = true);

}
clickerToEdit.addEventListener("click", onClickerEdit);

