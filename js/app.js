$(function(){
  var $grid =$('.grid');
  // var $boardLength =$("li").length;
  var $whatColor= { 1:"black", 2:"darkTeal", 3:"lightPink", 4:"purple", 5:"lightPurple", 6:"skyBlue", 7:"lightBabyBlue", 8:"rustyRed", 9:"brown",  10:"brightGreen", 11:"teal", 12:"bubblegum",  13:"blue", 14:"orangeBrown", 15:"yellow"};
  var $black = $('.black');
  var $create_grid =$(".create_grid");
  var $small = $("#small");
  var $medium =$("#medium");
  var $large =$("#large");
  // var $bubblegumCount = 0;
  // var $clickme = $(".clickme");
  var $play= $(".play");
  var $about = $('.about');
  var $score= $('.score');
  var $livescore = $('.black').length;
  var $countdown = $('.countdown');
  var $body =$('body');
  var $audio =$('#audio');
  var $li =$('li');

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


$small.on('click', function (i){
  $about.html("Color blindness or Color Vision Deficit affects around 8% of men");
  console.log("clicked small");
    for (i=0; i<100; i++){
      var $newSquare ='<li class='+$whatColor[Math.ceil(Math.random()*5)]+'></li>';
      $grid.append($newSquare);
    //   var $counter = 30;
    //   var $interval = setInterval(function() {
    //     $counter--;
    //     $countdown.html($counter+" seconds");
    //     if ($counter === 0) {
    //         clearInterval($interval);
    //     }
    // }, 1000);
      // console.log('$boardLength');

    // for (j=0; j<5, j++){
    //   .toggleClass
    // }
      }
    });

$medium.on('click', function (i){
  $about.html("Colorblindness medium");
  console.log($li);
  // $('li').css({'height': '1%'});
  // $li.css({'width': '1%'});
  console.log("clicked");
    for (i=0; i<400; i++){
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*10)]+'></li>';
      $clickme ='Math.ceil(Math.random()*25)';
      $grid.append($newSquare);
      $('li').css({'height': '5%', 'width': '5%'});
      $score.html($('.black').length);
      }
    });

$large.on('click', function (i){
  $about.html("Colorblindness large");
  console.log("clicked");
    for (i=0; i<2500; i++){
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
      $grid.append($newSquare);
      $('li').css({'height': '2%', 'width': '2%'});
      }
    });


// removes individual tiles that are black and adds a new random image at the bottom of the list updates the timer for correct choices
  $grid.on('click', '.black', function(i){
      // $livescore--;
      $(this).remove(300 * i+100);
      var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*14)]+'></li>';
      $grid.append($newSquare);
      $score.html($('.black').length);
      $counter++;
  });

  $grid.on('click', '.darkTeal', function(i){
      $(".darkTeal").fadeOut(300 * i+100);
      for (i=0; i< $('.darkTeal').length; i++){
        var $newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
        $grid.append($newSquare);
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

//   $instr_text.hide();
//
//  //main code block. runs on each lite click.
//   $('.grid').on("click", 'li', function(li) {
//
//     clickedIndex = this.id;
//
//     turnCounter ++;
//
//       if(!gameOver()){
//         move(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);
//         $(this).fadeOut(100);
//         $(this).fadeIn(200);
//         hasWon();
//       } else {
//         gameOver();
//     }
//     console.log(tilesToGo + " is the tiles go number of rem tiles")
//   //     $scoreBoard.html("clicks left: "+ (startingClicks - turnCounter) +  "     |     remaining tiles: " + remainingTiles() + "  |  lives remaining: " + livesCounter );
//   //
//   // });
// /*
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//   // EVENT LISTENERS //
//
// -----------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// */
//     $instructions.click(function(){
//         $instructions.children('p').slideToggle();
//         // window.scrollTo(0, -500);
//     });
//
//     //on reset click event run resetBoard function and update the text on screen.
//     $($reset).click(function() {
//       resetBoard();
//       $scoreBoard.html("----------");
//
//       if(livesCounter > 0){
//         livesCounter -=1;
//         $p1score.html("wise decision...maybe it's time for another level? | remaining lives: " + livesCounter);
//       }
//
//       $gridSizeSelector.show();
//       $('#welcome').delay(1000).fadeIn();
//
//       $tileArray.each(function(i, value){
//         $(this).delay(1000).fadeOut();
//         $(this).delay(3000).fadeIn();
//       })
//
//     });
//
//     //sets board up as 3by3
//     $($selectThree).click(function() {
//       prepBoard();
//       create3X3();
//       // startingClicks = startingClicksIndex[0];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
//     //sets board up as 4X4
//     $($selectFour).click(function() {
//       prepBoard();
//       create4X4();
//       // startingClicks = startingClicksIndex[1];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
//     //sets board up as 5X5
//     $($selectFive).click(function() {
//       prepBoard();
//       create5X5();
//       // startingClicks = startingClicksIndex[2];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
//     //sets board up as 6X6
//     $($selectSix).click(function() {
//       prepBoard();
//       create6X6();
//       // startingClicks = startingClicksIndex[3];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
//     //sets board up as 7X7
//     $($selectSeven).click(function() {
//       prepBoard();
//       create7X7();
//       // startingClicks = startingClicksIndex[4];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
//     //sets board up as 8X8
//     $($selectEight).click(function() {
//       prepBoard();
//       create8X8();
//       // startingClicks = startingClicksIndex[5];
//       $instr_text.fadeOut(400);
//       $playerScoreboard.css({ 'font-size': '16px'});
//     });
//
// /*
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
//
// // FUNCTIONS //
//
// ---------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------
// */
//   function animateClickedTile() {
//     $(this).fadeOut(100);
//     $(this).fadeIn(200);
//   }
//
//   function prepBoard(){
//     resetBoard();
//     $scoreBoard.html("----------");
//     removeGrid();
//     $('#welcome').delay(300).fadeOut();
//   };
//
//   function gameOver(){
//     //tests to see if player has lives left. if yes then do nothing but move onto next code block. if no, then bring back welcome screen and reset the lives counter to 3 ready for the next game.
//
//     //also should show the scoreboard to show final score.
//     if(livesCounter<=0){
//       $gridSizeSelector.show();
//       $welcomeMsg.html("play again");
//       $welcomeMsg.show();
//       $tileArray.each(function(i, value){
//         $(this).delay(1000).fadeOut();
//       })
//       $('#welcome').fadeIn();
//       $playerScoreboard.html("Game Over...");
//       $p1score.html("unlucky, that's game over...you can't beat me that easily! though you might be able to after a few tries!");
//       resetBoard();
//       livesCounter =3;
//       return true;
//     };
//
//     if(startingClicks - turnCounter > 0) {
//       return false;
//     } else {
//         $('#welcome').delay(400).fadeOut();
//       $p1score.html("you've run out of clicks... try again. lives remaining: " + (livesCounter -1) + "....board restarting....");
//
//       $tileArray.each(function(i, value){
//         $(this).delay(1000).fadeOut();
//         $(this).delay(3000).fadeIn();
//       })
//
//       $gridSizeSelector.hide();
//       $welcomeMsg.hide();
//       $('#welcome').delay(400).fadeIn();
//       $('#welcome').delay(2000).fadeOut();
//       livesCounter-=1;
//       resetBoard();
//       return true;
//       }
//     }
//
//   //deletes the DOM elements which currently exist. Use in conjuction with create Grid functions so you effectively remove and add new DOM elements. I think this is what is breaking my current game logic - investigate further.
//     function removeGrid() {
//       $tileArray.each(function (i, value) {
//         $tileArray[i].remove();
//       });
//     }
//
//   //calculates the remaining tiles to go green and returns the results for use in hasWon function
//     function remainingTiles () {
//       console.log(greenTileCount + " from the remaing tiles function");
//        return $tileArray.length - tilesToGo;
//
//     }
//
//     //animates the tiles on click
//     function animateTiles(clickedIndex) {
//       $(this).fadeOut(70);
//       $(this).fadeIn(200);
//     }
//
//     //ambient background changer using a plug in.
//     function animateBackground(){
//     $('body').ambience({
//       time:3000,
//       colors: ['black','darkgrey','darkblue', 'cyan','black','darkgrey','cyan','darkblue','cyan'],
//       speed:"fast"
//       }
//       );
//     };
//
//
//     // checks the game board to see if all lites are green. if all lites are green the game has been won and the winning sequence appears with message and score for level. score is passed into the scoreboard and the green tile count is reset back to 0.
//
//     function hasWon(){
//
//       //check all the lites to check if they're green. if so add one to the greentilecounter
//       $tileArray.each(function (i, value) {
//         if($($tileArray[i]).attr('class') === "green"){
//           greenTileCount ++;
//         }
//       });
//
//       tilesToGo = greenTileCount;
//
//       //log valueof greentielcounter at start
//       console.log(greenTileCount + " at start of function")
//
//       // if number of green tiles = the array length then youve won.
//       if(greenTileCount == $tileArray.length) {
//         $('#welcome').delay(400).fadeIn();
//         player1score = turnCounter;
//         resetBoard();
//
//         addToScoreBoard();
//
//         $gridSizeSelector.hide();
//         // $welcomeMsg.hide();
//         $gridSizeSelector.show();
//
//         $tileArray.each(function(i, value){
//           $(this).css({"background-color":"rgba(41,242,44,0.8)"});
//           $(this).delay(1000).fadeOut();
//         })
//         $p1score.html("you've won, big ups! choose next level to play");
//         return true;
//       }
//         greenTileCount = 0;
//     }
//
//     // resets the board back to red and the counters back to 0
//     function resetBoard() {
//       $tileArray.each(function (i, value) {
//         var removeGreen = $($tileArray[i]).removeClass("green");
//         turnCounter = 0;
//         greenTileCount = 0;
//       });
//     }
//
//     //logic for turning the right grids to green. takes in 5 arguments - 4 of which are to check for where the borders of the grid lie, and the final argument is the clicked lite index number.
//     // function move (isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex) {
//     //
//     //   var currentClick = [];
//     //   $welcomeMsg.hide();
//     //
//     //   var indexAsNumber = parseInt(clickedIndex);
//     //   currentClick.push(indexAsNumber);
//     //
//     //   var rel1 = indexAsNumber + 1;
//     //   var rel2 = indexAsNumber -1;
//     //   var rel3 = indexAsNumber - row_length;
//     //   var rel4 = indexAsNumber + row_length;
//     //
//     //   if(isTopRow(clickedIndex) && isLeftColumn(clickedIndex)){
//     //     currentClick.push(rel1,rel4);
//     //   } else if (isTopRow(clickedIndex) && isRightColumn(clickedIndex)) {
//     //       currentClick.push(rel2,rel4);
//     //   } else if (isBottomRow(clickedIndex) && isLeftColumn(clickedIndex)){
//     //       currentClick.push(rel1,rel3);
//     //   } else if (isBottomRow(clickedIndex) && isRightColumn(clickedIndex)){
//     //       currentClick.push(rel2,rel3);
//     //   } else if (isTopRow(clickedIndex)) {
//     //       currentClick.push(rel1,rel2,rel4);
//     //   } else if (isBottomRow(clickedIndex)){
//     //       currentClick.push(rel1,rel2,rel3);
//     //   } else if (isLeftColumn(clickedIndex)){
//     //       currentClick.push(rel1,rel3,rel4);
//     //   } else if (isRightColumn(clickedIndex)){
//     //       currentClick.push(rel2,rel3,rel4);
//     //   } else {
//     //       currentClick.push(rel1,rel2,rel3,rel4);
//     //   }
//
//       animateRelTileArray = currentClick;
//
//       for (i=0;i<currentClick.length; i++){
//
//             var x = $tileArray[currentClick[i]].id;
//             var str = "#"+x;
//             var $tile = $(str);
//             $tile.fadeOut(300);
//             $tile.toggleClass("green");
//             $tile.fadeIn(300);
//         }
//     }
//
//     //checks if clicked square is on the top row of the grid and returns a boolean statement to be passed into move function
//     function isTopRow(clickedIndex) {
//
//       if(parseInt(clickedIndex) <= row_length-1){
//         return true;
//       } else {
//         return false;
//       }
//     }
//
//     //checks if clicked square is on the bottom row of the grid and returns a boolean statement to be passed into move function
//     function isBottomRow(clickedIndex){
//       if(parseInt(clickedIndex) > $tileArray.length - (row_length+1)) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//
//     //checks if clicked square is in the left of the grid and returns a boolean statement to be passed into move function
//     function isLeftColumn(clickedIndex){
//
//       if(parseInt(clickedIndex) ==0 ){
//         return true;
//       }
//       else if(parseInt(clickedIndex)%(row_length) ==0){
//         return true;
//       } else {
//         return false;
//       }
//     }
//
//     //checks if clicked square is in the right of the grid and returns a boolean statement to be passed into move function
//     function isRightColumn(clickedIndex){
//
//       if(parseInt(clickedIndex) === $tileArray.length -1 ){
//         return true;
//       }
//
//       else if((parseInt(clickedIndex) + 1) % row_length == 0){
//         return true;
//       } else {
//         return false;
//       }
//     }
//
//     //the below functions create the different sized grid boards by adding new li DOM elements and then resizing them as a percentage of their container so create the correct grid shape.
//
//     function create8X8 () {
//       for (i=0;i<64;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//         $tileArray = $("li");
//         row_length = Math.sqrt($tileArray.length);
//         $tileArray.css("height", "10%").css("width", "10%");
//     }
//
//     function create7X7 () {
//       for (i=0;i<49;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//       $tileArray = $("li");
//       row_length = Math.sqrt($tileArray.length);
//       $tileArray.css("height", "12%").css("width", "12%");
//     }
//
//     function create6X6 () {
//       for (i=0;i<36;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//       $tileArray = $("li");
//       row_length = Math.sqrt($tileArray.length);
//       $tileArray.css("height", "14%").css("width", "14%");
//     }
//
//     function create5X5 () {
//       for (i=0;i<25;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//       $tileArray = $("li");
//       row_length = Math.sqrt($tileArray.length);
//       $tileArray.css("height", "17%").css("width", "17%");
//     }
//
//     function create4X4 () {
//       for (i=0;i<16;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//
//       $tileArray = $("li");
//       row_length = Math.sqrt($tileArray.length);
//       $tileArray.css("height", "22%").css("width", "22%");
//
//     }
//
//     function create3X3 () {
//       for (i=0;i<9;i++){
//         var newSquare = "<li id="+parseInt(i)+"></li>";
//         $(".grid").append(newSquare);
//       }
//
//       $tileArray = $("li");
//       row_length = Math.sqrt($tileArray.length);
//       $tileArray.css("height", "31%").css("width", "31%");
//
//     }
//
//     //scoreboard using row length to calc grid size and then store in relvant array/obj. then call this and display as a DOM element when lives remaining = 0;
//
//     function addToScoreBoard(){
//
//         var arrayLength = $("li").length;
//
//         if (arrayLength ===9){
//           grid3score= player1score;
//         } else if (arrayLength ===16){
//           grid4score= player1score;
//         } else if (arrayLength ===25){
//             grid5score= player1score;
//         } else if (arrayLength ===36){
//             grid6score= player1score;
//         } else if (arrayLength ===49){
//             grid7score= player1score;
//         } else if (arrayLength ===64){
//             grid8score= player1score;
//         }
//
//         $playerScoreboard.html("3X3 score: " + grid3score + " | " + "4X4 score: " + grid4score + " | " +"5X5 score: " + grid5score + " | " +"6X6 score: " + grid6score + " | " +"7X7 score: " + grid7score + " | "+"8X8 score: " + grid8score);
//     }
//
// });
