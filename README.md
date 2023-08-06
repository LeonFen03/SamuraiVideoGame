Title: 
**#Samurai Video Game**


This repository contains the code for a Samurai video game. The game provides a basic fighting experience without the use of AI, which aims to preserve the simplicity and innocence of older game cultures. It features limited avatars with unique attacks and appearances, basic animation, and music for each round.

**#Installation**
To install and run the Samurai Video Game on your local machine, follow these steps:

Clone the repository to your local machine using Git:

1.
git clone https://github.com/your-username/SamuraiVideoGame.git

2.
_Navigate to the cloned directory:_
cd SamuraiVideoGame
Open the index.html file in your preferred web browser.

Enjoy the Samurai Video Game!

**#Game's Objective**
The objective of the game is to establish a basis for a storyline structure without hindering user imagination. The game excludes AI to maintain the reflective nature of older cultures, where AI was simply responsive to user movements without learning models.

**#User Experience**
-It establishes a basis for a storyline structure without hindering user imagination. 
- Componentent Fighting experience no AI needed
	- excluding AI was the best decision for this game, this game if had AI would ruin the innocence nature of the game. This is reflective of a more older culture where AI was simply responsive to user movement without any incoporation of learning models. This is NOT because i lost to an AI replica used by a Javascript neuronal network
	-No cooldowns for special moves compotency in smashing your key buttons is expected and is a underrated skill.

**#Functionality**
The game's functionality is achieved through a series of JavaScript files and classes:

Global Variables: The top of the page contains global variables representing the state of both invisible and visible settings.

JavaScript Files: Three different JavaScript files are referenced on the HTML page through script tags. Each file has access to the global variables defined in the main JavaScript file.

Asynchronous Main Function: The main function awaits the click of the Tournament button before starting the game to ensure all current settings are reflected on the canvas.

StartGame Function: This function initializes character and background objects, representing the sprites drawn on the canvas.

Sprite Classes: Each object, represented by a class, expects preset positions, velocities, offsets, width, and height. They also contain attack box information associated with each character. Important methods for the sprites include the update method, which draws the sprite onto the canvas and updates it to the next frame of the current sprite sheet being used. Other methods include switchSprite and takeHit.

Animation Function: The animation function is called to begin the game. It checks if the game is paused or if the game is over (both represented by global variables). If neither condition is true, it calls upon the window to use the requestAnimationFrame function, which represents a frame and checks for collisions, updates animations, reflects current health, and checks for key inputs from both players.

The most crucial part of this game is adjusting for frame rate. The animation slider tells each character object how many frames to hold until drawing the next image, simulating a quicker or slower-paced animation style.
