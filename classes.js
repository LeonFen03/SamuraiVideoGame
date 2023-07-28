
const unlockPlayers = {
    samuraiMack: {
        position: {
                x: 0, y:0 
        }, 
        velocity:{
            x: 0,
            y:0
        },
        offset:{
            x: 215,
            y:157
        }, 
        imageSrc: './img/samuraiMack/idle.png',
        scale:2.5,
        framesMax:8,
        sprites: {
            idle:{
                imagesSrc: './img/samuraiMack/Idle.png',
                framesMax:8
            },
            Run: {
                imagesSrc: './img/samuraiMack/Run.png',
                framesMax:8
            },
            Jump: {
                imagesSrc: './img/samuraiMack/Jump.png',
                framesMax:2
            },
            Fall: {
                imagesSrc: './img/samuraiMack/fall.png',
                framesMax:2
            },
            Attack: {
                imagesSrc:'./img/samuraiMack/Attack1.png',
                framesMax:6
            },
            Hit: {
                imagesSrc:'./img/samuraiMack/TakeHit.png',
                framesMax: 4
            },
            Death: {
                imagesSrc:'./img/samuraiMack/Death.png',
                framesMax: 6
            }
        
        },
        attackBox:{
            offset: {
                x: 100,
                y:50
            },
            width: 100,
            height:50
        }
    },
    kenji:  {
        position: {
                x: 0, y:0 
        }, 
        velocity:{
            x: 0,
            y:0
        },
        offset:{
            x: 215,
            y:157
        }, 
        imageSrc: './img/kenji/Idle.png',
        scale:2.5,
        maxFrames:4,
        sprites: {
            idle:{
                imagesSrc: './img/kenji/Idle.png',
                framesMax:4
            },
            Run: {
                imagesSrc: './img/kenji/Run.png',
                framesMax:8
            },
            Jump: {
                imagesSrc: './img/kenji/Jump.png',
                framesMax:2
            },
            Fall: {
                imagesSrc: './img/kenji/fall.png',
                framesMax:2
            },
            Attack: {
                imagesSrc:'./img/kenji/Attack1.png',
                framesMax:4
            },
            Hit: {
                imagesSrc:'./img/kenji/TakeHit.png',
                framesMax: 3
            },
            Death: {
                imagesSrc:'./img/kenji/Death.png',
                framesMax: 7
            }
        
        },
        attackBox:{
            offset: {
                x: -100,
                y:  50
            },
            width: 100,
            height:50
        }
    },
    tarzan: {
        position: {
                x: 0, y:0 
        }, 
        velocity:{
            x: 0,
            y:0
        },
        offset:{
            x: 215,
            y:50
        }, 
        imageSrc: './img/tarzan/idle.png',
        scale:2.5,
        framesMax:10,
        sprites: {
            idle:{
                imagesSrc: './img/tarzan/Idle.png',
                framesMax:10
            },
            Run: {
                imagesSrc: './img/tarzan/Run.png',
                framesMax:8
            },
            Jump: {
                imagesSrc: './img/tarzan/GoingUp.png',
                framesMax:3
            },
            Fall: {
                imagesSrc: './img/tarzan/GoingDown.png',
                framesMax:3
            },
            Attack: {
                imagesSrc:'./img/tarzan/Attack1.png',
                framesMax:7
            },
            Hit: {
                imagesSrc:'./img/tarzan/TakeHit.png',
                framesMax: 3
            },
            Death: {
                imagesSrc:'./img/tarzan/Death.png',
                framesMax: 11
            }
        
        },
        attackBox:{
            offset: {
                x: 100,
                y:50
            },
            width: 100,
            height:50
        }
    }
}
const backgrounds = {
    OakWoods: {
        position:{
            x:0,
            y:0
        },
        imageSrc:'./img/background.png',
        SpriteShop: {
            position: {
                x: 600,
                y:128
            }
        ,imageSrc: './img/shop.png', scale:2.75,framesMax:6}
    }

}



class Sprite {
    constructor ({position, imageSrc,scale = 1, framesMax = 1, offset = {x:0,y:0}}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.framesCurrent = 0;
        this.scale = scale;
        this.width = 50;
        this.height = 150;
        this.framesMax = framesMax;
        this.framesElapsed = 0;
        this.framesHold = 10;
        this.offset = offset;
    }
    draw() {
        c.drawImage(this.image,
            this.framesCurrent * (this.image.width / this.framesMax),0,this.image.width / this.framesMax,this.image.height,
            this.position.x - this.offset.x,this.position.y - this.offset.y,(this.image.width / this.framesMax) * this.scale,this.image.height*this.scale);
    }
    animateFrame() {
        this.draw();
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++;
            } else {
                this.framesCurrent = 0; 
            }
        }
    }
    
    update() {
      this.draw();
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
            this.framesCurrent++;
          } else {
            this.framesCurrent = 0; 
          }
        }
      }
     
}

class Fighter extends Sprite {
    constructor ({position, velocity,offset, imageSrc,scale = 1, framesMax = 1, sprites,attackBox = {offset:{},width:undefined, height:undefined}}) {
        super({ position, imageSrc, scale, framesMax, offset})
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.health = 100;
        this.state = 'idle';
        this.lastKey;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 7;
        this.isAttacking;
        this.sprites = sprites;
        for (const sprite in sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src =  sprites[sprite].imagesSrc;
        }
        console.log(this.sprites); 
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset:attackBox.offset,
            width: attackBox.width,
            height: attackBox.height,
        }
    }
    attack () {
        this.switchSprite('attack');
        this.isAttacking = true;
    }
    takeHit() {
        this.health -= 5;
        if (this.health <= 0) {
            this.state = 'death';
            setTimeout(()=>{
                this.health = 100;
            },2000)
        } else {
            this.state = 'takeHit';
            setTimeout(()=> {
                this.state = 'idle';
            },500)

        }
    }
    update() {
      this.draw();
      if (this.image === this.sprites.Death.image && this.framesCurrent === this.sprites.Death.framesMax - 1) {
        gameOver = true;
        document.getElementById('gameContainer').animate({opacity:'0'},{duration:1000,fill:'forwards'});
        return;
      }
      this.animateFrame();
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
        this.velocity.y = 0;
        this.position.y = 330;
      } else this.velocity.y += gravity;
    }
    switchSprite(input) {
        if (this.image === this.sprites.Attack.image && this.framesCurrent < this.sprites.Attack.framesMax - 1) {
            return;
        }
        if (this.image === this.sprites.Death.image && this.framesCurrent <= this.sprites.Death.framesMax - 1) {
            return;
        }
            switch(input) {
                case 'idle':
                    if (this.image !== this.sprites.idle.image) {
                        this.image = this.sprites.idle.image
                        this.framesMax = this.sprites.idle.framesMax;
                        this.framesCurrent = 0;
                    }
                break;
                case 'run':
                    if (this.image !== this.sprites.Run.image) {
                        this.image = this.sprites.Run.image;
                        this.framesMax = this.sprites.Run.framesMax;
                        this.framesCurrent = 0;
                    }
                break;
                case 'jump':
                    if (this.image !== this.sprites.Jump.image) {
                        this.image = this.sprites.Jump.image;
                        this.framesMax = this.sprites.Jump.framesMax;
                        this.framesCurrent = 0;
                    }
                break;
                case 'fall':
                    if (this.image !== this.sprites.Fall.image)   {
                        this.image = this.sprites.Fall.image;
                        this.framesCurrent = 0;
                    }      
                break;
                case 'attack':
                    if (this.image !== this.sprites.Attack.image)   {
                        this.image = this.sprites.Attack.image;
                        this.framesMax = this.sprites.Attack.framesMax;
                        this.framesCurrent = 0;
                    }      
                break;
                case 'takeHit':
                    if (this.image !== this.sprites.Hit.image) {
                        this.image = this.sprites.Hit.image;
                        this.framesMax = this.sprites.Hit.framesMax;
                        this.framesCurrent = 0;
                    }   
                break;
                case 'death':
                    if (this.image !== this.sprites.Death.image) {
                        this.image = this.sprites.Death.image;
                        this.framesMax = this.sprites.Death.framesMax;
                        this.framesCurrent = 0;
                    }   
                break;
        }
    
        
}
}



function startGame (playerOne ="samuraiMack",playerTwo="kenji",background) {
    let player1 = new Fighter(unlockPlayers[playerOne]);
    let player2 = new Fighter(unlockPlayers[playerTwo]);
    const backgroundg = new Sprite(backgrounds[background]);
    let shop = false;
    if (background === 'OakWoods') {
        shop = new Sprite(backgrounds[background]['SpriteShop']);
    }
    player1.draw();
    player2.draw();
    return [player1,player2,backgroundg,shop];
    
    
}
