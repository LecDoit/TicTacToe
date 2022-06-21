let gameboard = function(player) {
    this.player = player;
}

let player = function(name,position,symbol){
    this.name = name;
    this.position = position;
    this.symbol = symbol;
}

let playerFactory = function(name, position,symbol){
    return {name,position,symbol}
}

let pika =  new player('pika',"first","cross")
let pikaF =  playerFactory('pika',"first","cross")

let calc = (function(){
    let add = function(a,b){a+b}
 return (add)})();

 let abc = 'hard';
 let one = 1;
 let two = 2;
 

 let sex = (function(){
    let gigi = "badman ting"

    let aman = function(){
        console.log('this method gonna print stuff')}
    return {
        gigi}
    }());


let autoGenerateBoard = (function(){
    let board1 = document.querySelector('#dynamicBoard');

    for (let i=9; i>0; i--){
        let NewDiv = document.createElement('div')
        board1.appendChild(NewDiv).setAttribute('id',i)
        board1.appendChild(NewDiv).setAttribute('class','free')
        // if (i%2==0){
        //     NewDiv.innerHTML= 'x'
        // }else{
        //     NewDiv.innerHTML= 'o'
        // }
    }
})();

let putX = function(event){
    let freeSpots = document.querySelectorAll('.free')
    console.log(event)

}



// let id1 = document.getElementById("1").addEventListener('click',function(){
//     let id1o = document.getElementById('1').innerHTML = "X"
// })
// let id2 = document.getElementById("2").addEventListener('click',function(){
//     let id1o = document.getElementById('2').innerHTML = "X"
//     putX()
// })

let globalTurn = 0;
let XO = document.getElementsByClassName('XO')
let XOChild = document.querySelectorAll('.XOChild');
document.querySelector('body').addEventListener('click',function(event){

    if (event.target.classList[0] == 'free'){
        console.log(event.target.classList)
       
        if (globalTurn % 2 == 0){
        let addClass = event.target.classList.add('taken')
        let rmClass = event.target.classList.remove('free')
        let putX = event.target.innerHTML = "O"
        } else{
            let addClass = event.target.classList.add('taken')
            let rmClass = event.target.classList.remove('free')
            let putX = event.target.innerHTML = "X"
        }
    }

})

document.addEventListener('keydown',function(event){

    if (event.key == 'Shift'){
    

        if (globalTurn % 2 == 0){
            console.log("its X turn")
            XOChild[0].setAttribute('id','turn')
            XOChild[1].setAttribute('id','')
            globalTurn++
            console.log(globalTurn)
        } else {
            console.log("its O turn")
            XOChild[0].setAttribute('id','')
            XOChild[1].setAttribute('id','turn')
            globalTurn++
            console.log(globalTurn)
        }
    }

})
    



