let timer = 60;
function rectangularCollision (player,enemy) {
    return (player.attackBox.position.x + player.attackBox.width >= enemy.attackBox.position.x && 
        player.attackBox.position.x  <= enemy.position.x + enemy.width && 
        player.attackBox.position.y + player.attackBox.height >= enemy.position.y && 
        player.attackBox.position.y <= enemy.position.y + enemy.height)
}
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
function getWinnerName(camelCased) {
    const obj = {
        samuraiMack: 'Samurai Mack',
        kenji:'kenji',
        tarzan:'Tarzan'
    }
    return obj[camelCased];
}
function determineWinner(player,enemy, timerId) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex';
    if (player.health === enemy.health) {
        document.querySelector('#name').textContent = 'Tie'; 
    }
    if (player.health < enemy.health) {
        document.querySelector('#name').textContent = `${getWinnerName(document.getElementById('playerC').value)} Wins!`;
    } 
    if (enemy.health < player.health) {
        document.querySelector('#name').textContent = `${getWinnerName(document.getElementById('playerU').value)} Wins!`;
        if (player.framesCurrent === 1) {
            UserWins++;
        }
        document.querySelector('#score').innerHTML =  `Total Points: ${UserWins}`;
    }
    setTimeout(()=>{
        if (!gameOver){
            gameOver = true;
            document.getElementById('gameContainer').animate({opacity:'0'},{duration:1000,fill:'forwards'});
        
        }
        setTimeout(() => { document.location.reload(); }, 3000)
    },3000);
    
    return;
}
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        document.getElementById("timer").innerHTML = timer;
    }
    if (timer === 0) {
        determineWinner(player,enemy);
    }
}