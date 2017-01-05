# SeeingRed
## A JS Game

### Play the game [here]:https://seeing-red.herokuapp.com/

##Overview

The idea for Seeing Red started with the idea of developing a vision based game.

On looking into possible options for the color scheme I encountered research into color blindness, color vision deficiency or CVD and how to make a more accessible web.

The web is a very visual environment, but for a significant portion of the population ([around 8% of men and 1 in 200 women] (http://www.colourblindawareness.org/colour-blindness/)) a significant amount of this information is hard to distinguish.

At this time I decided to look into the possibility of turning this into a more practical application.

The design of the game play is built around colored spots. These echo the ink dots that are the foundation for the most commonly used test for color blindness the Ishihara Test.

https://en.wikipedia.org/wiki/Color_blindness#Diagnosis
https://en.wikipedia.org/wiki/Ishihara_test  

In the standard version of the game the color palette has been selected to be tonal if viewed in grey scale. This means that for the majority of users they will be able to play regardless of any CVD.

The game play is fairly simple. Once created the board disappears in two ways. Firstly the bottom dots in the grid are "eaten". Secondly at timed intervals a whole color disappears from across the board.

To keep to game alive and achieve a higher score a player simply clicks the black spots. This adds a random number of new colored spots including one new black spot at the top of the board and counteracts the disappearing spots. The faster that you are able to click the black spots the more you offset the disappearance of spots.

Your score is based on a combination of the number of spots you click and the number of black spots still on board at the time. This encourages you to try and save the lowest dots (those most in danger of being "eaten") first in preference to just rapidly reclicking the same spot. The decision to randomly remove an entire color from the board was based on the discovery that in an earlier version of the game it was possible to hover over a blackspot and button mash. Similarly rewarding successful clicks with a random rather than fixed number of new spots avoided the newly generated black spot from always being added in the same point on the board which again would have allowed an indefinite amount of button mashing. While not completely offsetting this tactic these modifications do help to mitigate it's successfulness.
