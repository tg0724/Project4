//this is comment
// {}();$
$(document).ready(function(){
  console.log("Hello! Welcome to the PartyLand! I am Jay!");

 prompt("Hello, Friday Hah? Welcome to PartyLand!")

 var answer =  prompt("What's your name?")
 if (answer == "PartyQueen"){
   $("body").append("Hello PartyQueen! Always you! ");
 } else{
   $("body").append("Hello my new friend!" +  answer);
 }

window.alert("You sure you wanna party today?")

 var answer1 =prompt("Uha! I know you are the party animal! Let me help you to prepare your amazing party! Please say Yes!")
 if (answer1 == "Yes"){
   console.log(" Great! Let's start!");
 } else {
   console.log(" Common on! It is Friday! Let's start!");
 }

  var x =prompt("Please enter the number of the amount of your friends who will coming to the party!")
 if (x > 30) {
  console.log("A big party");
} else if (x<10){
   console.log("A small party");
 } else {
   console.log("Cool! Enjoy your party!")
 }

var x1 =prompt("Pleas enter the number of how many package of coke you want")
var x2 =prompt("Please enter the number of how many pizza you want")
var x3 =prompt("Please enter the number of how many bottoles of Whiskey you want")
var x4 =prompt("Please enter the number of how many dozens of paper cups you need")
var x5 =prompt("Please enter the number of how many package of Napkin you need")

window.alert("Let's see the final price!")
console.log(x1*10 + x2*15 + x3*30 + x4*5 + x5*3 );

var x3 =prompt("Are you ready for the party? Yes or no!")
if (x3 =="Yes") {
  $('body').append("<br>" + "<img src='https://66.media.tumblr.com/215a4268934921a3b1594f9034d635e3/tumblr_inline_n0gn5gkcuE1sohk3w.gif'>");
} else {
  $('body').append("<br>" + "<img src='https://67.media.tumblr.com/921c7bd1b8c9d38b60387813021c6c04/tumblr_ndpuabFFcY1u0zhkuo1_500.gif'>")
}

console.log("Enjoy your party! Enjoy your night!");
var x6 =prompt("Hope you like the PartyLand program! Thank you for using it!")
window.alert("See u next time:)")






});
