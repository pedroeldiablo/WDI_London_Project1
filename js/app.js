$(function(){
  var $grid =$('.grid');
  var $whatColor= { 1:"yellow", 2:"darkTeal", 3:"lightPink", 4:"purple", 5:"lightPurple", 6:"skyBlue", 7:"lightBabyBlue", 8:"rustyRed", 9:"brown",  10:"brightGreen", 11:"teal", 12:"bubblegum",  13:"blue", 14:"orangeBrown", 15:"black"};
  var $redvsgreen= { 1:"darkgreen26", 2:"midgreen37", 3:"mildgreen47", 4: "lightgreen75", 5:"darkred31", 6:"midred40", 7:"darksalmon42", 8:"peachy68", 9:"black"};
  // to be added at a later date
  // var $bluevsred={};
  var $black = $('.black');
  var $create_grid =$(".create_grid");
  var $medium =$("#medium");
  var $restart = $("#restart");
  var $redGreen=$("#redGreen");
  var $about = $('.about');
  var $score= $('.score');
  var $scoreboard = $('.scoreboard');
  var $playerscore = 0;
  var $countdown = $('.countdown');
  var $body =$('body');
  var $audio =$('#audio');
  var $li =$('li');
  var $updateScore = $('li').length;
  var $counter =0;

  // about = "colors are disappearing. try to keep them alive. click black spots and each time you do new spots will be added at the top of the board."
// https://en.wikipedia.org/wiki/Color_blindness#Diagnosis
// https://en.wikipedia.org/wiki/Ishihara_test

$restart.hide();

var gameOver =(function (){
  $("body").css({"background-color": "red"});
  $($grid).css({"background-color":"red"});
  $($scoreboard).css({"font-size":"100px"});
  $($grid).empty();
  $medium.show();
  $restart.hide();
  // $medium.
});

var startOver =(function (){
  $playerscore = 0;
  $scoreboard.html($playerscore);
  $medium.show();
  $restart.hide();
  $($grid).empty();
});

$restart.on('click', function (i){
  startOver();
  $("body").css({"background-color": "red"});
  $($grid).css({"background-color":"red"});
  $($scoreboard).css({"font-size":"100px"});
  buildABoard();
});


$medium.on('click', function (i){
  buildABoard();
});

var buildABoard =(function (){
  $("body").css({"background-color": "white"});
  $($grid).css({"background-color":"white"});
  $($scoreboard).css({"font-size":"25px"});
  $playerscore = 0;
  $scoreboard.html($playerscore);
  $medium.hide();
  $restart.show();
  $about.html("Quickly quickly. Keep the colors alive");
  var $blackSquare= '<li class=black></li>';
  $grid.prepend($blackSquare);
    for (i=0; i<399; i++){
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
      $grid.append($newSquare);
    }
   var eatdot = setInterval(function(){
     var dots = $(".black").length;
       if (dots > 0){
         $('li').last().remove();
         console.log("eating");

       }else {
         gameOver();
         clearInterval(eatdot);
       }
     },100);
    var dropclass = setInterval(function() {
      var dots = $(".black").length;
        if (dots > 0){
          $colorToRemove = '.'+$whatColor[Math.ceil(Math.random()*14)];
          console.log($colorToRemove);
          $($colorToRemove).fadeOut();
        }else{
          clearInterval(dropclass);
        }

      },1500);
});
// removes individual tiles that are black and adds a new black tile plus up to 5 random tiles at the start of the list

  $grid.on('click', '.black', function(i){
      $livescore = $('.black').length;
      $playerscore = $playerscore + $livescore + 100;
      $scoreboard.html($playerscore);
      $(this).remove(300 * i+100);
      var $blackSquare= '<li class=black></li>';
      $grid.prepend($blackSquare);
      for (i=0; i<Math.ceil(Math.random()*5); i++){
            var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
            $grid.prepend($newSquare);
          }
      });

  //
  //     $create_grid.on('click', function (i){
  //       $grid.css({"background-color": "white"});
  //       $about.html("Quickly quickly.");
  //       // $("#medium").removeClass("create_grid").addClass("reset");
  //       // $(".reset").html("reset");
  //       var $blackSquare= '<li class=black></li>';
  //       $grid.prepend($blackSquare);
  //         for (i=0; i<399; i++){
  //           var $newSquare= '<li class='+$redvsgreen[Math.ceil(Math.random()*9)]+'></li>';
  //           $clickme ='Math.ceil(Math.random()*25)';
  //           $grid.append($newSquare);
  //         }
  //        var eatdot = setInterval(function(){
  //          var dots = $(".black").length;
  //            if (dots > 0){
  //              $('li').last().remove();
  //              console.log("eating");
  //
  //            }else {
  //              gameOver();
  //              clearInterval(eatdot);
  //            }
  //          },100);
  //         var dropclass = setInterval(function() {
  //           var dots = $(".black").length;
  //             if (dots > 0){
  //               $colorToRemove = '.'+$redvsgreen[Math.ceil(Math.random()*8)];
  //               console.log($colorToRemove);
  //               $($colorToRemove).fadeOut();
  //             }else{
  //               clearInterval(dropclass);
  //             }
  //
  //           },1500);
  //         });
  //     // removes individual tiles that are black and adds a new black tile plus up to 5 random tiles at the start of the list
  //
  //       $grid.on('click', '.black', function(i){
  //           $livescore = $('.black').length;
  //           $playerscore = $playerscore + $livescore + 100;
  //           $scoreboard.html($playerscore);
  //           $(this).remove(300 * i+100);
  //           var $blackSquare= '<li class=black></li>';
  //           $grid.prepend($blackSquare);
  //           for (i=0; i<Math.ceil(Math.random()*5); i++){
  //                 var $newSquare= '<li class='+$redvsgreen[Math.ceil(Math.random()*9)]+'></li>';
  //                 $grid.prepend($newSquare);
  //               }
  //           });

  });
  // var $small = $("#small");
  // var $large =$("#large");
  // var $play= $(".play");
  // var $livescore = $('.black').length;
  // $grid.prepend($newSquare);
  // $score.html($('.black').length);

  // $score.html($('.black').length);
  // }
  // if ($livescore === 0) {
  //           $body.css({'background-color': 'red'});

  // var $eatdot = setInterval(function(){
  //   $('li').last().remove();
  //   $score.html($('.black').length);
  // },100);


// var eatdot = setInterval(function(){
//   $('li').last().remove();
//   // $score.html($('.black').length);
// },100);


  // click all the black tiles
  // if time =0 reshuffle remaining tiles;
  // 3 lives;

  //   var $interval = setInterval(function() {
  //     $counter--;
  //     $countdown.html($counter+" seconds");
  //     if ($counter === 0) {
  //         clearInterval($interval);
  //         $body.css({'background-color': 'red'});
  //
  //     }
  // }, 1000);

  // $eatthedot= (function() {
  //   $('ul li').first().remove();
  //   }, 100);

  // $small.on('click', function (i){
  //     // var $counter = 30;
  //     var $interval = setInterval(function() {
  //       $counter--;
  //       $countdown.html($counter+" seconds");
  //       if ($counter === 0) {
  //           clearInterval($interval);
  //           $body.css({'background-color': 'red'});
  //           $countdown.html("You lose!");
  //           $grid.toggle();
  //           $('h2').fadeIn(300);
  //           // $body.css({'background-color': 'white'}).fadeIn(10000);
  //       }
  //     }, 1000);
  //
  //   $about.html("Color blindness or Color Vision Deficit affects around 8% of men");
  //     for (i=0; i<100; i++){
  //       var $newSquare ='<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
  //       $grid.append($newSquare);
  //       $('li').css({'height': '50px', 'width': '50px'});
  //       $('h2').fadeOut(300 * i+100);
  //       }
  //     });

  // $large.on('click', function (i){
  //   $about.html("Colorblindness large");
  //   console.log("clicked");
  //     for (i=0; i<2500; i++){
  //       var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
  //       $grid.append($newSquare);
  //       }
  //     });
  //

  // for (i=0; i< $('.black').length; i++){
  //       var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
  //       $grid.prepend($newSquare);
  //     }

  // $score.html($('.black').length);
  // $counter++;

  // var $interval = setInterval(function() {
  //     $counter--;
  //     $countdown.html($counter+" seconds");
  //     // if ($counter === 0) {
  //     //     clearInterval($interval);
  //     //     $body.css({'background-color': 'red'});
  //
  //     // }
  //   }, 1000);

  // $grid.on('click', '.darkTeal', function(i){
  //     $(".darkTeal").fadeOut(300 * i+100);
  // });

  // $grid.on('click', '.darkTeal', function(i){
  //     $(".darkTeal").fadeOut(300 * i+100);
  //     for (i=0; i< $('.darkTeal').length; i++){
  //       var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
  //       $grid.append($newSquare);
  //       // $counter--;
  //     }
  // });

  // $grid.on('click', '.lightPink', function(i){
  //     $(".lightPink").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.bubblegum', function(i){
  //     $(".bubblegum").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.purple', function(i){
  //     $(".purple").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.lightPurple', function(i){
  //     $(".lightPurple").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.skyBlue', function(i){
  //     $(".skyBlue").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.lightBabyBlue', function(i){
  //     $(".lightBabyBlue").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.rustyRed', function(i){
  //     $(".rustyRed").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.brown', function(i){
  //     $(".brown").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.brightGreen', function(i){
  //     $(".brightGreen").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.teal', function(i){
  //     $(".teal").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.bubblegum', function(i){
  //     $(".bubblegum").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.blue', function(i){
  //     $(".blue").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.orangeBrown', function(i){
  //     $(".orangeBrown").fadeOut(300 * i+100);
  // });
  // $grid.on('click', '.yellow', function(i){
  //     $(".yellow").fadeOut(300 * i+100);
  // });
