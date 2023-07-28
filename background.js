// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = 1024;
// canvas.height = 576;
// let state = 'idle';
// let state2 = 'idle'
// let gameOver = false;
// c.fillRect(0,0,canvas.width,canvas.height);
// const gravity = .7;
// const background = new Sprite({
//     position: {
//         x: 0,
//         y:0
//     }
// ,imageSrc: './img/background.png'})

// const shop = new Sprite({
//     position: {
//         x: 600,
//         y:128
//     }
// ,imageSrc: './img/shop.png', scale:2.75,framesMax:6})

// const player = new Fighter({ 
//     position: {
//         x: 0, y:0 
//     }, 
//     velocity:{
//     x: 0,
//     y:0
// }},{
//     x: 215,
//     y:157
// }, './img/samuraiMack/idle.png',2.5,8,{
//     idle:{
//         imagesSrc: './img/samuraiMack/Idle.png',
//         framesMax:8
//     },
//     Run: {
//         imagesSrc: './img/samuraiMack/Run.png',
//         framesMax:8
//     },
//     Jump: {
//         imagesSrc: './img/samuraiMack/Jump.png',
//         framesMax:2
//     },
//     Fall: {
//         imagesSrc: './img/samuraiMack/fall.png',
//         framesMax:2
//     },
//     Attack: {
//         imagesSrc:'./img/samuraiMack/Attack1.png',
//         framesMax:6
//     },
//     Hit: {
//         imagesSrc:'./img/samuraiMack/TakeHit.png',
//         framesMax: 4
//     },
//     Death: {
//         imagesSrc:'./img/samuraiMack/Death.png',
//         framesMax: 6
//     }

// },{
//     offset: {
//         x: 100,
//         y:50
//     },
//     width: 100,
//     height:50
// });

// player.draw();
// player.state = 'idle';
// const enemy = new Fighter({ position: {x: 400, y:100 }, velocity:{
//     x: 0,
//     y:0
// }},{
//     x: 215,
//     y:167
// }, './img/kenji/idle.png',2.5,4,
// {
//         idle:{
//             imagesSrc: './img/kenji/Idle.png',
//             framesMax:4
//         },
//         Run: {
//             imagesSrc: './img/kenji/Run.png',
//             framesMax:8
//         },
//         Jump: {
//             imagesSrc: './img/kenji/Jump.png',
//             framesMax:2
//         },
//         Fall: {
//             imagesSrc: './img/kenji/fall.png',
//             framesMax:2
//         },
//         Attack: {
//             imagesSrc:'./img/kenji/Attack1.png',
//             framesMax:4
//         },
//         Hit: {
//             imagesSrc:'./img/kenji/TakeHit.png',
//             framesMax: 3
//         },
//         Death: {
//             imagesSrc:'./img/kenji/Death.png',
//             framesMax: 7
//         }
        
// }, {
//     offset: {
//         x: -100,
//         y:  50
//     },
//     width: 100,
//     height:50
// });

// enemy.draw();
// enemy.state = 'idle';