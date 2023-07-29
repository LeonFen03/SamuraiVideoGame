let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
const gravity = .7;
let gameOver = true;
let UserWins = 0;
let playerSpeed = 7;
let restartGamev = false;
document.querySelector('#playerU').value = 'samuraiMack';
document.querySelector('#playerC').value = 'kenji';
let player1Name = document.querySelector('#playerU').value;
let player2Name = document.querySelector('#playerC').value;
document.querySelector('#settings').value = 'computer';
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
async function main() { 
    document.querySelector('#playerU').addEventListener('change',(event)=>{
        const {value} = event.target;
        player1Name = value;
    })
    document.querySelector('#playerC').addEventListener('change',(event)=>{
        const {value} = event.target;
        player2Name = value;
    });
    let [player1,player2,backgroundg,shop] = await new Promise((resolve) => {
        document.getElementById('click').addEventListener('click', (event)=>{
            resolve(startGame(player1Name,player2Name,'OakWoods'));
            gameOver = !gameOver;
            document.getElementById('globe').style.display = 'none';
            document.querySelector('#fighterU').innerHTML = getWinnerName(player1Name);
            document.querySelector('#fighterC').innerHTML = getWinnerName(player2Name);
            decreaseTimer();
            document.getElementById('gameContainer').animate({opacity:'1'},{duration:1000,fill:'forwards'});
            Animate();
        });
    })
    let player = player1;
    let enemy = player2;
    let background = backgroundg;
    document.querySelector('#fpsSlider').addEventListener('change',(event)=>{
        const {value} = event.target;
        player.framesHold = value;
        if (playerSpeed > 10){
            playerSpeed = 6;
        }
        playerSpeed = playerSpeed + (playerSpeed - value);
        enemy.framesHold = value;
    });
    
function Animate() {
    if (!gameOver) {
        window.requestAnimationFrame(Animate);
    } 
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);
    background.update();
    shop.update();
    player.update();
    enemy.update();
    player.velocity.x  = 0;
    enemy.velocity.x = 0;
    //player movement
    if (keys.a.pressed && player.lastKey === 'a' ) {
        player.velocity.x = -5;
        player.switchSprite('run')
    }  else if (keys.d.pressed && player.lastKey === 'd') {
        player.switchSprite('run')
        player.velocity.x = 5;
    } else {
        player.switchSprite(player.state);
        
    }

    if (player.velocity.y < 0) {
        player.switchSprite('jump')
    } else if (player.velocity > 0) {
        player.switchSprite('fall')
    }
    // enemy movement


    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5;
        enemy.switchSprite('run')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 5;
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite(enemy.state);
    }
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity > 0) {
        enemy.switchSprite('fall')
    }


    if (rectangularCollision(player,enemy) && player.isAttacking && player.framesCurrent === 4) {
        enemy.takeHit();
        player.isAttacking = false;
        document.querySelector('#enemyHealth').style.width = enemy.health + '%';
    } 
    if (rectangularCollision(enemy,player) && enemy.isAttacking  && enemy.framesCurrent === 2) {
        player.takeHit();
        enemy.isAttacking = false;
        document.querySelector('#playerHealth').style.width = player.health + '%';
    } 
    if (enemy.health <= 0 || player.health <= 0) {
        determineWinner(player,enemy,timerId);
    }
    if (document.querySelector('#settings').value === 'computer') {
        if (rectangularCollision(enemy,player)) {
    
            const Attack = Math.floor(Math.random()* 10);
             enemy.attack();
             if (Attack > 7 ) {
              enemy.velocity.y = -20;
             }
             } else {
                  if (!(enemy.health <= 2)) {
                      enemy.state = 'run';
                  }
                 if (player.position.x < enemy.position.x) {
                  setTimeout(()=>{
                      enemy.velocity.x = -3;
                  },450)
                 } else if (player.position.x >= enemy.position.x) {
                  setTimeout(()=>{
                      enemy.velocity.x = 3;
                  },450)
                 }
             }
          }   
    }
   
    window.addEventListener('keydown', (event) => {
        console.log(event.key)
       switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
        break
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a'; 
        break
        case 'w':
            player.velocity.y = -20;
        break
        case ' ':
            player.attack(enemy);
        break;
       }
       if (document.querySelector('#settings').value === 'secondUser') {
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
                    enemy.attack(player);
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




