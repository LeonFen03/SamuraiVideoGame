// Timer declarations.
let timer = 150;
let timerId;
// Construction of a function to create pop ups for the corresponding ID requested
function eventHanderFunction(ID) {
    return function () {
        const popUp =  document.getElementById(ID).style;
        if (popUp.display === 'none') {
             popUp.display = 'block';
             return true;
        } else {
             popUp.display = 'none';
             return false;
        }
     }
}
const popup1 = eventHanderFunction('popup');
const popup2 = eventHanderFunction('paused');
document.getElementById('Instructions').addEventListener('click', popup1);

// Decrease time
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        document.getElementById("timer").innerHTML = timer;
    }
    // Determine winner when timer ends
    if (timer === 0) {
        determineWinner(player,enemy);
    }
}

// Hide settings.
document.getElementById('clicky').addEventListener('click',function () {
    const display = document.getElementById('setting').style.display;
    if (display === 'none'){
        document.getElementById('setting').style.display = 'flex';
        document.getElementById('clicky').innerHTML = 'Hide Settings';
    } else {
        document.getElementById('setting').style.display = 'none';
        document.getElementById('clicky').innerHTML = 'Show Settings';
    }
    
})
// Collision 
function rectangularCollision (player,enemy) {

    // Return boolean  on if objects collided.
    return (player.attackBox.position.x + player.attackBox.width >= enemy.attackBox.position.x && 
        player.attackBox.position.x  <= enemy.position.x + enemy.width && 
        player.attackBox.position.y + player.attackBox.height >= enemy.position.y && 
        player.attackBox.position.y <= enemy.position.y + enemy.height)
}
// Play and create Audio according to sound requested.
function SoundEffect(sound,volume=0.2) { 
    let audio = new Audio(`./audio/${sound}`);
    audio.volume = volume;
    audio.play();
    audio.remove();
    return audio;
}

// Grab Name of characters for display
function getWinnerName(camelCased) {
    const obj = {
        samuraiMack: 'Samurai Mack',
        kenji:'kenji',
        tarzan:'Tarzan',
        Leon:'Leon'
    }
    return obj[camelCased];
}
// Unlock SUPER Character
function unlockPlayer() {
   if (document.getElementById('unlockCharacter').value  === "LeonRoXXs101+4") {
        document.getElementById('unlock').style.display = 'block';
   }
}
document.getElementById('submit').addEventListener('click', unlockPlayer);

//Determine winner for this round.
function determineWinner(player,enemy, timerId) {
    clearTimeout(timerId)
    //Display 
    document.querySelector('#displayText').style.display = 'flex';
    if (player.health === enemy.health) {
        document.querySelector('#name').textContent = 'Tie'; 
    }
    if (player.health < enemy.health) {
        document.querySelector('#name').textContent = `${getWinnerName(document.getElementById('playerC').value)} Wins!`;
        SoundEffect('agony.wav',0.2)
    } 
    if (enemy.health < player.health) {
        document.querySelector('#name').textContent = `${getWinnerName(document.getElementById('playerU').value)} Wins!`;

        if (player.framesCurrent === 1) {
            UserWins++;
            SoundEffect('win.mp3',0.3)
        }
        document.querySelector('#score').innerHTML =  `Total Points: ${UserWins}`;
    }

    setTimeout(()=>{
        if (!gameOver){
            gameOver = true;
            document.getElementById('gameContainer').animate({opacity:'0'},{duration:1000,fill:'forwards'});
        
        }
        setTimeout(() => { document.location.reload(); }, 3000)
    },4000);
    
    return;
}
