$(function(){
  var $grid =$('.grid');
  var $whatColor= { 1:"black", 2:"darkTeal", 3:"lightPink", 4:"purple", 5:"lightPurple", 6:"skyBlue", 7:"lightBabyBlue", 8:"rustyRed", 9:"brown",  10:"brightGreen", 11:"teal", 12:"bubblegum",  13:"blue", 14:"orangeBrown", 15:"yellow"};
  var $create_grid =$(".create_grid");
  // var newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*10)]+'></li>';


// (Math.ceil(Math.random()*10))

  //"teal", "bubblegum",  "blue", "orangeBrown","yellow"

$create_grid.on('click', function (i){
  console.log("clicked");
  for (i=0; i<100; i++){
    var newSquare= '<li class='+$whatColor[Math.ceil(Math.random()*15)]+'></li>';
    $grid.append(newSquare);
    // $grid.css("height", "10%").css("width", "10%");
    }
  });

// function animateBackground(){
//     $('body').({
//       time:3000,
//       colors: ['black','darkgrey','darkblue', 'cyan','black','darkgrey','cyan','darkblue','cyan'],
//       speed:"fast"
//       }
//       );
//     };




  // function create8X8 () {
  //       for (i=0;i<64;i++){
  //         var newSquare = "<li id="+parseInt(i)+"></li>";
  //         $(".grid").append(newSquare);
  //       }

  // $(".create_grid").on('click', function(i){
  //   for(i=0; i<100; i++){//
  //   var newSquare= "<li class="red"></li>";
  //   $(".grid").append(newSquare);
  //   // $(".red").on('click', function(){
  //   //     $(".red").fadeOut(300 * i+100);
  //   //   };
  //   }
  // });
  //


  $(".red").on('click', function(i){
    // var $lis = $(this).parents().children();
    // $lis.each(function(i, li){
      $(".red").fadeOut(300 * i+100);
    // });
  });

  $(".blue").on('click', function(i){
    // var $lis = $(this).parents().children();
    // $lis.each(function(i, li){
      $(".blue").fadeOut(300 * i+100);
    // });
  });

  $(".green").on('click', function(i){
    // var $lis = $(this).parents().children();
    // $lis.each(function(i, li){
      $(".green").fadeOut(300 * i+100);
    // });
  });

  $(".black").on('click', function(i){
    // var $lis = $(this).parents().children();
    // $lis.each(function(i, li){
      $(".black").fadeOut(300 * i+100);
    // });
  });

  $(".orange").on('click', function(i){
    // var $lis = $(this).parents().children();
    // $lis.each(function(i, li){
      $(".orange").fadeOut(300 * i+100);
    // });
  });




});


// $(function(){
//   var $grid = $(".grid");
//   var $grid10color = $(".grid10color");
//
//   $grid10color.on("click", function(){
//     console.log(clicked);
//     // for(i=0; i<100; i++){
//     //   var newSquare = "<li id="+parseInt(i)+"></li>";
//     //   $grid10color.append(newSquare);
//     }
//   });
// });






























// $(document).ready(function() {
//
//   console.log("jQuery load pass");
//
//
//   var col1 = 0 ;
//   var col2 = 0 ;
//
//
// row_length =[2,3,4,5,6,7,8,9,10];
//
// number_of_squares = row_length[i]**;
//
// if (number_of_squares%2 === 1){
//   var col1= ceil(row_length/2);
//   var col2 = floor(row_length/2);
// } else (){
//   var col1 = row_length/2 +1;
//   var col2 = row_length - col1;
// }
//
//
// });

// $(document).ready(function() {
//
//   //declare all jQuery DOM variables here.
//   var $tileArray = $("li");
//   var $scoreBoard = $("#score");
//   var $reset = $("#reset");
//
//   var $selectThree = $("#threeC");
//   var $selectFour = $("#fourC");
//   var $selectFive = $("#fiveC");
//   var $selectSix = $("#sixC");
//   var $selectSeven = $("#sevenC");
//   var $selectEight = $("#eightC");
//   var $p1score = $("#afterReset");
//   var $gridSizeSelector = $(".gridSizeSelector");
//   var $welcomeMsg = $('#welcomeMessage');
//   var $playerScoreboard = $("#playerScoreboard");
//   var $instructions = $("#instructions");
//   var $instr_text = $('#howtoplaytext');
//
//   //declare other variables here
//   var row_length = Math.sqrt($tileArray.length);
//   var clickedIndex=0;
//   // var greenTileCount = 0;
//   // var turnCounter = 0;
//   var player1score = 0;
//   // var startingClicks = 0;
//   // var startingClicksIndex = [8,15,35,50,75,100];
//   var animateRelTileArray = [];
//   // var livesCounter = 3;
//   var tilesToGo = 0;
//   // var grid3score = 0, grid4score = 0,grid5score = 0, grid6score = 0, grid7score = 0, grid8score = 0;
//
// // shuffle function https://css-tricks.com/snippets/jquery/shuffle-dom-elements/
// // to call
// // $('ul#list li').shuffle();
//   $.fn.shuffle = function() {
//
//         var allElems = this.get(),
//             getRandom = function(max) {
//                 return Math.floor(Math.random() * max);
//             },
//             shuffled = $.map(allElems, function(){
//                 var random = getRandom(allElems.length),
//                     randEl = $(allElems[random]).clone(true)[0];
//                 allElems.splice(random, 1);
//                 return randEl;
//            });
//
//         this.each(function(i){
//             $(this).replaceWith($(shuffled[i]));
//         });
//
//         return $(shuffled);
//
//     };
//
// })(jQuery);
//
//
//
//
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
