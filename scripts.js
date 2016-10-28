//this is comment
// {}();$
$(document).ready(function(){
alert("Hello, Friday Hah? Welcome to PartyLand!");
$("h1").hide();
$("h2").hide();
$("h3").hide();
$("h4").hide();
$("h5").hide();
$("h6").hide();
$("h7").hide();
$("h8").hide();
$("h9").hide();
var answer = prompt("What's your name?")
{
   $('body').append("<br>" + "<img src='https://66.media.tumblr.com/215a4268934921a3b1594f9034d635e3/tumblr_inline_n0gn5gkcuE1sohk3w.gif'>");
   $("body").append("Hello my friend " + answer);
   $("h1").show();
 }

 $("h1").on("click", function(){
          $("h1").toggle();
          var answer1 = prompt("Uha! I know you are the party animal! Let me help you to prepare your amazing party! Please say Yes!");
          if (answer1 == "yes"){$("body").append("<br>Great! Let's start!" + answer);}
          else {$("body").append("<br>Common on! It is Friday! Let's start!");}
         $("h2").show();
       });
 $("h2").on("click", function(){
          $("h2").toggle();
          var x =prompt("Please enter the number of the amount of your friends who will coming to the party!");
              if (x > 30) {$("body").append("<br>Wow, a big party.");}
              else if (x < 10) {$("body").append("<br>Okay, a small home party");}
              else {$("body").append("<br>Cool! Let's get started!")}
         $("h3").show();
});

$("h3").on("click", function(){
         $("h3").toggle();
         var x1 =prompt("Pleas enter the number of coke you want");
             $("body").append("<br>$" + x1*1.25 + "+ ");
         $("h4").show();
});

$("h4").on("click", function(){
         $("h4").toggle();
         var x2 =prompt("Please enter the number of how many pizza you want");
             $("body").append("$" + x2*10 + "+ ");
         $("h5").show();
});

$("h5").on("click", function(){
         $("h5").toggle();
         var x3 =prompt("Please enter the number of beer you want");
             $("body").append("$" + x3*5 + "+ ");
         $("h6").show();
});

$("h6").on("click", function(){
         $("h6").toggle();
         var x4 =prompt("Please enter the number of paper cups you need");
             $("body").append("$" + x4*0.1 + "+ ");
         $("h7").show();
});

$("h7").on("click", function(){
         $("h7").toggle();
         var x5 =prompt("Last one, please enter the number of pack of Napkin you need");
              $("body").append("$" + x5*2);
         $("h8").show();
});

$("h8").on("click", function(){
         $("h8").toggle();
         var x6 = console.log( x1*1.25 + x2*10 + x3*5 + x4*0.1 + x5*2 );
         $("body").append( x6 + " is your total cost.");
         $("h9").show();
});

$("h9").on("click", function(){
         $("h9").toggle();
         var answer3 = prompt("This may be a fraud page, sure you want to continue?");
          if (answer3 == yes) {prompt("Enter your card number below please");}
          else if (answer3 == no) {$("body").append("Alright, bye.");}

});







});
