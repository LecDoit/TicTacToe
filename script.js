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
        if (i%2==0){
            NewDiv.innerHTML= 'x'
        }else{
            NewDiv.innerHTML= 'o'
        }
    }
})();

let putX = function(){
    let freeSpots = document.querySelectorAll('.free')
    console.log('start')
    for (let i = 0; i>0; i++){
        console.log("i")} 

}



   putX()

   