# SeeingRed
## A JavaScript Game

### Play the game [here](https://seeing-red.herokuapp.com/)

![alt text](/images/SeeingRed1.png "SeeingRed Game in action")


##Overview

 While learning to code I have often worked using vibrant and highly contrasting color schemes to help me understand how the box model and CSS selectors work. While this has been useful to me, for the course instructional team it has meant reviewing some retina unfriendly work. The idea for Seeing Red started with wanting to develop a vision based and visual game, with a more consider palette.   

On looking into possible options for the color scheme I encountered research into color blindness, color vision deficiency or CVD and how to make a more accessible web.

The web is a very visual environment, but for a significant portion of the population ([around 8% of men and 1 in 200 women] (http://www.colourblindawareness.org/colour-blindness/)) a significant amount of this information is hard to distinguish.

At this time I decided to look into the possibility of turning this into a more practical application, built around some of the research that I had discovered on CVD.

The design of the game play is built around colored spots. These echo the ink dots that are the foundation for the most commonly used test for color blindness the Ishihara Test.

https://en.wikipedia.org/wiki/Color_blindness#Diagnosis

https://en.wikipedia.org/wiki/Ishihara_test  

![alt text](/images/Ishihara-12.gif "Logo Title Text 1")

In the standard version of the game the color palette has been selected to be tonal if viewed in grey scale. This means that for the majority of users they will be able to play regardless of any CVD.

The game play is fairly simple. Once created the board disappears in two ways. Firstly the bottom dots in the grid are "eaten". Secondly at timed intervals a whole color disappears from across the board.

To keep to game alive and achieve a higher score a player simply clicks the black spots. This adds a random number of new colored spots including one new black spot at the top of the board and counteracts the disappearing spots. The faster that you are able to click the black spots the more you offset the disappearance of spots.

Your score is based on a combination of the number of spots you click and the number of black spots still on board at the time. This encourages you to try and save the lowest dots (those most in danger of being "eaten") first in preference to just rapidly reclicking the same spot. The decision to randomly remove an entire color from the board was based on the discovery that in an earlier version of the game it was possible to hover over a blackspot and button mash. Similarly rewarding successful clicks with a random rather than fixed number of new spots avoided the newly generated black spot from always being added in the same point on the board, which again would have allowed an indefinite amount of button mashing. While not completely offsetting this tactic these modifications do help to mitigate it's successfulness.

##Project Aims

The aim of the project was to over a week plan out and build a working JavaScript game. This could be either a novel idea or a could take inspiration from an existing game. The only requirements were that the game should:

* Include separate HTML / CSS / JavaScript files
* Be a working game hosted on Heroku
* That the code as well as a link to the game should be included in my Github repo.


##Technology Used

JavaScript
HMTL5
CSS3
Heroku
git
Trello

##Feedback and Evaluation





##Challenges

The design of the game play evolved through the project. The initial idea was developed not with a disappearing board, but with a timeout. In this variant the aim was simply to achieve a high score.

Once the MVP of this variant was completed a problem became apparent in that it wasn't very exciting or particularly difficult.

This resulted in a choice as to whether to continue with the game as was and devote the remaining time to enhancing the visual finesse including building levels which would have focused on specific color blindness palettes, or to explore a redesign of the game play. Since this was a game I took the decision to work on the game play.

The first step was to add an element of motion. In this I experimented both with spots disappearing from the top of the board as well as the bottom.

Removing from the top made the game very visual, however it also rendered it almost unplayable as targeting and clicking spots was extremely difficult.

Once I had finalised on removing from the bottom, I realised that the game now had a design flaw in that the black spots didn't move. To prevent this I introduced the idea of disappearing colors as well as rewarding correct clicks with newly generated spots, working through variants of speed and regularity to produce a playable version of the game.

## Where to From Here?

In the current variant there is no ability to login and record scores. If this project was developed further then this would be a natural progression. It would then be possible to add the additional levels that would focus on specific color ranges such as a red/green board where players would need to target a specific shade of one of the colours. Players affected by certain forms of CVD would be hindered in this version of the game compared to the standard colors, as they would be unable to distinguish between a similar tone of the other color. Through comparing a user's scores when using different palettes it could provide an indication of where they may be affected by a form of CVD.

The code itself could be made cleaner and OOP applied and there is room to look at the styling, particularly to ensure that the board is completely visible once generated as if it extends beyond the viewport then a player needs to score to see the whole board.  
