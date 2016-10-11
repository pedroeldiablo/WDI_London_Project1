$(function(){
  var $grid =$('.grid');
  var $whatColor= { 1:"black", 2:"darkTeal", 3:"lightPink", 4:"purple", 5:"lightPurple", 6:"skyBlue", 7:"lightBabyBlue", 8:"rustyRed", 9:"brown",  10:"brightGreen", 11:"teal", 12:"bubblegum",  13:"blue", 14:"orangeBrown", 15:"yellow"};
  var $black = $('.black');
  var $create_grid =$(".create_grid");
  var $small = $("#small");
  var $medium =$("#medium");
  var $large =$("#large");
  var $play= $(".play");
  var $about = $('.about');
  var $score= $('.score');
  var $playerscore =$('.playerscore');
  var $livescore = $('.black').length;
  var $countdown = $('.countdown');
  var $body =$('body');
  var $audio =$('#audio');
  var $li =$('li');
  var $counter = 10;

// click all the black tiles
// if time =0 reshuffle remaining tiles;
// 3 lives;

  var $counter = 30;
  var $interval = setInterval(function() {
    $counter--;
    $countdown.html($counter+" seconds");
    if ($counter === 0) {
        clearInterval($interval);
        $body.css({'background-color': 'red'});

    }
}, 1000);

// $eatthedot= (function() {
//   $('ul li').first().remove();
//   }, 100);

setInterval(function(){
  $('li').last().remove();
  $score.html($('.black').length);
},100);


$small.on('click', function (i){
    // var $counter = 30;
    var $interval = setInterval(function() {
      $counter--;
      $countdown.html($counter+" seconds");
      if ($counter === 0) {
          clearInterval($interval);
          $body.css({'background-color': 'red'});
          $countdown.html("You lose!");
          $grid.toggle();
          $('h2').fadeIn(300);
      }
    }, 1000);
  $about.html("Color blindness or Color Vision Deficit affects around 8% of men");
    for (i=0; i<100; i++){
      var $newSquare ='<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
      $grid.append($newSquare);
      $('li').css({'height': '50px', 'width': '50px'});
      $('h2').fadeOut(300 * i+100);
      }
    });

$medium.on('click', function (i){
  $about.html("Colorblindness medium");
    for (i=0; i<400; i++){
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*10)]+'></li>';
      $clickme ='Math.ceil(Math.random()*25)';
      $grid.append($newSquare);
      $('li').css({'height': '25px', 'width': '25px'});
      $score.html($('.black').length);
      }
    });

$large.on('click', function (i){
  $about.html("Colorblindness large");
  console.log("clicked");
    for (i=0; i<2500; i++){
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
      $grid.append($newSquare);



      // $eatthedot = (function() {
      //   $('ul li').first().remove();
      // }, 100);

      // $('li').css({'height': '10px', 'width': '10px'});
      }
    });


// removes individual tiles that are black and adds a new random image at the bottom of the list updates the timer for correct choices
  $grid.on('click', '.black', function(i){
      $(this).remove(300 * i+100);
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*14)]+'></li>';
      $grid.append($newSquare);
      // $('li').css({'height': '25px', 'width': '25px'});
      $playerscore++;
      $score.html($('.black').length);
      $counter++;


  });

  $grid.on('click', '.darkTeal', function(i){
      $(".darkTeal").fadeOut(300 * i+100);
      for (i=0; i< $('.darkTeal').length; i++){
        var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
        $grid.append($newSquare);
        // $counter--;
      }
  });

  $grid.on('click', '.lightPink', function(i){
      $(".lightPink").fadeOut(300 * i+100);
  });
  $grid.on('click', '.bubblegum', function(i){
      $(".bubblegum").fadeOut(300 * i+100);
  });
  $grid.on('click', '.purple', function(i){
      $(".purple").fadeOut(300 * i+100);
  });
  $grid.on('click', '.lightPurple', function(i){
      $(".lightPurple").fadeOut(300 * i+100);
  });
  $grid.on('click', '.skyBlue', function(i){
      $(".skyBlue").fadeOut(300 * i+100);
  });
  $grid.on('click', '.lightBabyBlue', function(i){
      $(".lightBabyBlue").fadeOut(300 * i+100);
  });
  $grid.on('click', '.rustyRed', function(i){
      $(".rustyRed").fadeOut(300 * i+100);
  });
  $grid.on('click', '.brown', function(i){
      $(".brown").fadeOut(300 * i+100);
  });
  $grid.on('click', '.brightGreen', function(i){
      $(".brightGreen").fadeOut(300 * i+100);
  });
  $grid.on('click', '.teal', function(i){
      $(".teal").fadeOut(300 * i+100);
  });
  $grid.on('click', '.bubblegum', function(i){
      $(".bubblegum").fadeOut(300 * i+100);
  });
  $grid.on('click', '.blue', function(i){
      $(".blue").fadeOut(300 * i+100);
  });
  $grid.on('click', '.orangeBrown', function(i){
      $(".orangeBrown").fadeOut(300 * i+100);
  });
  $grid.on('click', '.yellow', function(i){
      $(".yellow").fadeOut(300 * i+100);
  });

});
