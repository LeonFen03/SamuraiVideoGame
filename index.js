// Global variable declarations, and default settings
const gravity = .7;
let gameOver = true;
let pauseGame = false;
let UserWins = 0;
let music = true;
let restartGamev = false;
let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
const songs = ['ultimateFighter.mp3','ultimateFighter.mp3','ultimateFighter.mp3','fighter2.mp3']
document.querySelector('#playerU').value = 'samuraiMack';
document.querySelector('#playerC').value = 'kenji';
let playerSpeed = (10 - document.getElementById('fpsSlider').value);
let player1Name = document.querySelector('#playerU').value;
let player2Name = document.querySelector('#playerC').value;
document.querySelector('#settings').value = 'computer';

// Capturing key use to determined player's immediate movement.
const keys = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}



// Asynchronous function
async function main() { 
    document.querySelector('#playerU').addEventListener('change',(event)=>{
        const {value} = event.target;
        player1Name = value;
    })
    document.querySelector('#playerC').addEventListener('change',(event)=>{
        const {value} = event.target;
        player2Name = value;
    });
    // Declaration of game variables awaiting click before initalizing players based on settings.
    let [player1,player2,backgroundg,shop] = await new Promise((resolve) => {
        document.getElementById('click').addEventListener('click', ()=>{
            // Resolving the player objects representing the sprites drawn on campus
            resolve(startGame(player1Name,player2Name,'OakWoods'));
            gameOver = !gameOver;
            // Reflect names of chosen players
            document.querySelector('#fighterU').innerHTML = getWinnerName(player1Name);
            document.querySelector('#fighterC').innerHTML = getWinnerName(player2Name);
            // Play music stored in folder, descrease timer
            let audio = new Audio(`./audio/${songs[Math.floor(Math.random()*songs.length)]}`);
            audio.volume = 0.45;
            audio.play();
            audio.remove();
            audio.play();
            decreaseTimer();
            // Fade in Character healthbars and timer, start animation for game
            document.getElementById('gameContainer').animate({opacity:'1'},{duration:1000,fill:'forwards'});
            document.getElementById('globe').style.display = 'none';

            Animate();
        });
    })
    // New variables referencing the resolved canvas objects
    let player = player1;
    let enemy = player2;
    let background = backgroundg;
    // Making sure setting doesn't change during game.
    let user2 = document.querySelector('#settings').value;

    // Slider Adjusting for Player/Player2 Animation and speed
    document.querySelector('#fpsSlider').addEventListener('click',(event)=>{
        const {value} = event.target;
        player.framesHold = value;
        enemy.framesHold = value;
        playerSpeed = (10 - value);
        if (playerSpeed > 10 || playerSpeed < 0){
            playerSpeed = 5;
        }
    });
//Animation definition function ultilizing canvas objects, must be declared here in order to use the variables just recently defined.
// Doing otherwise such as entering variables as arguments inside animate will result mess with requestAnimationFrame functionality.

function Animate() {
    // Triggered to check when game is over and pause button was pressed.
    if (!gameOver && !pauseGame) {
        window.requestAnimationFrame(Animate);
    } 
    // Methods used to handle Animation in regards to characters and canvas background
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);
    background.update();
    shop.update();
    player.update();
    enemy.update();
    player.velocity.x  = 0;
    enemy.velocity.x = 0;

    //  Handling responses to player movements when key is pressed.
    if (keys.a.pressed && player.lastKey === 'a' ) {
        player.velocity.x = -playerSpeed;
        player.switchSprite('run')
    }  else if (keys.d.pressed && player.lastKey === 'd') {
        player.switchSprite('run')
        player.velocity.x = playerSpeed;
    } else {
        player.switchSprite(player.state);
        
    }

    if (player.velocity.y < 0) {
        player.switchSprite('jump');
    } else if (player.velocity > 0) {
        player.switchSprite('fall');
    }

    // Handling responses to enemy movements when key is pressed.
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -playerSpeed;
        enemy.switchSprite('run')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = playerSpeed;
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite(enemy.state);
    }
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity > 0) {
        enemy.switchSprite('fall')
    }

    // Handles Collision between attack box's of enemies and players determing outcome based on if an attacked occured
    if (rectangularCollision(player,enemy) && (player.isAttacking || player.isAttacking2)  && player.framesCurrent === 4) {
        enemy.takeHit(player);
        player.isAttacking = false;
        player.isAttacking2 = false;
        SoundEffect('ow.wav',0.5)
        document.querySelector('#enemyHealth').style.width = enemy.health + '%';
    } 
    if (rectangularCollision(enemy,player) && (enemy.isAttacking || enemy.isAttacking2)  && enemy.framesCurrent === 2) {
        player.takeHit(enemy);
        enemy.isAttacking = false;
        enemy.isAttacking2 = false;
        document.querySelector('#playerHealth').style.width = player.health + '%';
    } 
    // How to handle low health in regards to either character.
    if (enemy.health <= 0 || player.health <= 0) {
        determineWinner(player,enemy,timerId);
    }
    // Automated attacks based on the settings current option.
    if (user2 === 'computer') {
        const Attack = Math.random()* 11;
        if (rectangularCollision(enemy,player)) {

             enemy.attack(' ');
             if (Attack > 4 ) {
              enemy.velocity.y = -20;
             }
             } else {
                  if (Attack < 0.4) {
                    enemy.attack('m');
                  }
                  if (!(enemy.health <= 2)) {
                      enemy.state = 'run';
                  }
                 if (player.position.x < enemy.position.x) {
                  setTimeout(()=>{
                      enemy.velocity.x = -playerSpeed;
                  },450)
                 } else if (player.position.x >= enemy.position.x) {
                  setTimeout(()=>{
                      enemy.velocity.x = playerSpeed;
                  },450)
                 }
             }
          }   
    }
   // Key events for attacks, and current movement, must be declared in main function for variable access.
    window.addEventListener('keydown', (event) => {
        console.log(event.key)
       switch (event.key) {
        case 'm':
            //Special Attack
            player.attack('m');
            SoundEffect(player.sprites.Attack2.Audio,0.3);
        break
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
        break
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a'; 
        break
        case 'w':
            // Move Up
            player.velocity.y = -20;
        break
        case ' ':
            // Attack
            player.attack(' ');
            SoundEffect(player.sprites.Attack.Audio,0.3)
        break;
        case 'Enter':
            // Pause
            const toggle = popup2();
            clearTimeout(timerId);
            if (!toggle) {
                decreaseTimer();
            }
            pauseGame = !pauseGame;
            Animate()
        break;
       }
       //If user chose local player 
       if (user2 === 'secondUser') {
            switch(event.key) {
                case 'ArrowRight':
                    keys.ArrowRight.pressed = true;
                    enemy.lastKey = 'ArrowRight';
                break
                case 'ArrowLeft':
                    keys.ArrowLeft.pressed = true;
                    enemy.lastKey = 'ArrowLeft';
                break
                case 'ArrowUp':
                    enemy.velocity.y = -20;
                break
                case 'ArrowDown':
                    enemy.attack(' ');
                break;
            }
       }
      
        
       
    })
    window.addEventListener('keyup', (event) => {
        switch (event.key) {
         case 'd':
            keys.d.pressed = false;
         break
         case 'a':
            keys.a.pressed = false;
        break
        }
        switch (event.key) {
            case 'ArrowRight':
               keys.ArrowRight.pressed = false;
            break
            case 'ArrowLeft':
               keys.ArrowLeft.pressed = false;
           break
        }
     })
    
    
    

}
main()




