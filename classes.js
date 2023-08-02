// Characters to choose from!
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
                framesMax:6,
                Damage:4,
                Audio:'woosh.wav'
            },
            Attack2: {
                imagesSrc:'./img/samuraiMack/Attack2.png',
                framesMax:6,
                Damage:9,
                Audio:'cling.wav'
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
        },
        animSpeed:5,
        stats: {
            width: 50,
            height: 150
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
                framesMax:4,
                Damage:5,
                Audio:'woosh.wav'
            },
            Attack2: {
                imagesSrc:'./img/kenji/Attack2.png',
                framesMax:4,
                Damage:10
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
        },
        animSpeed:5,
        stats: {
            width: 50,
            height: 150
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
        imageSrc: './img/tarzan/Idle.png',
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
                framesMax:7,
                Damage:5,
                Audio:'cling.wav'
            },
            Attack2: {
                imagesSrc:'./img/tarzan/Attack3.png',
                framesMax:9,
                Damage:10,
                Audio:'cling.wav'
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
        },
        stats: {
            width: 50,
            height: 150
        }
    },
    Leon: {
        position: {
            x: 0, y:0 
        }, 
        velocity:{
            x: 0,
            y:0
        },
        offset:{
            x: 215,
            y:110
        }, 
        imageSrc: './img/Fire/Idle.png',
        scale:2,
        framesMax:7,
        sprites: {
            idle:{
                imagesSrc: './img/Fire/Idle.png',
                framesMax:7
            },
            Run: {
                imagesSrc: './img/Fire/Run.png',
                framesMax:8
            },
            Jump: {
                imagesSrc: './img/Fire/Jump.png',
                framesMax:9
            },
            Fall: {
                imagesSrc: './img/Fire/Jump.png',
                framesMax:9
            },
            Attack: {
                imagesSrc:'./img/Fire/Attack_2.png',
                framesMax:4,
                Damage:7,
                Audio:'woosh.wav'
            },
            Attack2: {
                imagesSrc:'./img/Fire/Flame_jet.png',
                framesMax:14,
                Damage:25,
                Audio:'fireball.mp3'
            },
            Hit: {
                imagesSrc:'./img/Fire/Hurt.png',
                framesMax: 3
            },
            Death: {
                imagesSrc:'./img/Fire/Dead.png',
                framesMax: 6
            }
        },
        attackBox:{
            offset: {
                x: 100,
                y:50
            },
            width: 100,
            height:51
        },
        animSpeed:10,
        stats: {
            width: 50,
            height: 150
        }
    },
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
        ,imageSrc: './img/shop.png', scale:2.75,framesMax:6,animSpeed:10},stats:{width:50,height:150}
    }

}


// The object defining the disposition of a sprite on canvas
class Sprite {
    constructor ({position, imageSrc,scale = 1, framesMax = 1, offset = {x:0,y:0}, animSpeed, stats={width:50,height:150}}) {
        // Declare properties for how it's drawn and animation preference
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.framesCurrent = 0;
        this.scale = scale;
        this.width = stats.width;
        this.height = stats.height;
        this.framesMax = framesMax;
        this.framesElapsed = 0;
        this.framesHold = animSpeed;
        this.offset = offset;
    }
    // draw method
    draw() {
        // Utilizes method on canvas to draw according the the frame it should be on based on current frame, handles height and width. Position defined last with offset if assigned with.
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
    // Organizes how the frame should be animated, and adjusts for framerate. Increase Elapsed value until it reaches desired length of frame hold than animate by 1 frame.
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
// Extension of Sprite class use to define properties unique to a fighter on canvas.
class Fighter extends Sprite {
    constructor ({position, velocity,offset, imageSrc,scale = 1, framesMax = 1, sprites,attackBox = {offset:{},width:undefined, height:undefined, },animSpeed, stats}) {
        // Object properties for the fighter.
        super({ position, imageSrc, scale, framesMax, offset})
        this.velocity = velocity;
        this.width = stats.width;
        this.height = stats.height;
        this.health = 100;
        this.state = 'idle';
        this.lastKey;
        this.cheatCode = false;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.isAttacking;
        this.isAttacking2;
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
    //Attack
    attack (key) {
        if (key === ' ' || key === 'ArrowDown' ) {
            this.switchSprite('attack');
            this.isAttacking = true;
        } else if (key === 'm' || key === 'Shift') {
            this.switchSprite('attack2');
            this.isAttacking2 = true;
        }
        
    }
    //Handles how the fighter recieves damage from enemy
    takeHit(enemy) {
        if (enemy.isAttacking) {
            this.health -=  [1,2,1,enemy.sprites.Attack.Damage][Math.floor(Math.random()*4)];
        } else if (enemy.isAttacking2) {
            if (enemy.sprites.Attack2.Damage > 10) {
                this.health -= enemy.sprites.Attack2.Damage;
            } else {
                this.health -= [1,1,enemy.sprites.Attack2.Damage][Math.floor(Math.random()*3)];
            }
            
        }
        if (this.health <= 0) {
            this.state = 'death';
        } else {
            this.state = 'takeHit';
            setTimeout(()=> {
                this.state = 'idle';
            },500)

        }
    }
    // Update method used to account for animation of movement and location on canvas
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
      // Gravity
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
        this.velocity.y = 0;
        this.position.y = 330;
      } else this.velocity.y += gravity;
    }
    // Sprite case per animation requested .
    switchSprite(input) {
        // Current fight move.
        let attack = this.sprites.Attack;
        if (this.image === this.sprites.Attack.image) {
            attack = this.sprites.Attack;
        } else if (this.image === this.sprites.Attack2.image) {
            attack = this.sprites.Attack2;
        }
        // If animation is on attack or death do not allow for a switch
        if ( this.image === attack.image && this.framesCurrent < attack.framesMax - 1) {
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
                case 'attack2':
                    if (this.image !== this.sprites.Attack2.image) {
                        this.image = this.sprites.Attack2.image;
                        this.framesMax = this.sprites.Attack2.framesMax;
                        this.framesCurrent = 0;
                    }   
                break;
        }
    
        
}
}


// Declare the main players and background for game session.
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
