# sushime
Clicker game
![alt text] (https://github.com/Zaidwerd/sushime/blob/master/images/screenshots/sushime-logo.png)

##Requirements:
 
 Create a one - two player game that encompasses what we have learned in the first three weeks of General Assembl's Web Development Immersive. The project must have a game page and landing page. The landing pages must be a copied design. 
 
##Inspiration:
![alt text] (https://github.com/Zaidwerd/sushime/blob/gh-pages/images/screenshots/WhackAMole.jpg)
The game was inspired by whack-a-mole and sushi conveyor belt restaurants 

##Introduction:

Sushime is a clicker based game that gives you 60 seconds to eat as much sushi as you can.

##Game Play:

![alt text] (https://github.com/Zaidwerd/sushime/blob/master/images/screenshots/sushime-landing.png)

First you need to enter a username and password that will be passed on to the game page.

![alt text] (https://github.com/Zaidwerd/sushime/blob/master/images/screenshots/sushime-gameplay.png)

Player is given 60 seconds to use your mouse or track pad to click as many sushi dishes that pop up.

![alt text] (https://github.com/Zaidwerd/sushime/blob/master/images/screenshots/sushime-winner.png)

After time runs out an alert will pop up with your final score.

##Logic
![alt text] (https://github.com/Zaidwerd/sushime/blob/master/images/screenshots/Screen%20Shot%202016-10-10%20at%209.45.03%20PM.png)
The logic was to create divs with a plate as a background and append the sushi images to them randomly using random.math. This went as planned until the sushi began to continue to populate even after the first appending. I was unsuccesful in creating a seperate array that would check to see if the plate div was empty and push index to a new array used for random.math. instead I changed the set interval to a quicker progression so give it less of chance to populate in the same div. I stuggled with my things with creating this game but I look forward to improving it as times goes by.

In this game I used:
HTML
CSS
Javascript
Jquery


##Future Improvements
I was not able to create the game I orignally planned. I got caught up in smaller details and did not estimate the time it would take me to figure out some of the problems. But, I would like to go back and improve this game to my original design:

-Add a updating scoreboard
-Add two or three more types of sushi with varying score values
-Add difficulty levels 
-Fix the overlap of sushi populating per plate with an empty plate array

##Thank You
GA instrcutors for keeping me on my toes throughout the entire process.

##Credit
I had assistance with the javascript thanks to
http://stackoverflow.com/questions/37642738/whack-a-mole-game-with-jquery

