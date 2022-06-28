
// Modules: only one - GameBoard, displayControlers
// Factory: more than one - players


//2 - everything is in gameboard
let gameboard = (function() {


    let globalTurn = 0;
    let roundCount = true;
    let countToEnd = 0

//3 - the array is dynamically generated

    let autoGenerateBoard = (function(){
        let board1 = document.querySelector('#dynamicBoard');
        for (let i=9; i>0; i--){
            let NewDiv = document.createElement('div')
            board1.appendChild(NewDiv).setAttribute('id',i)
            board1.appendChild(NewDiv).setAttribute('class','free')   
        }
    })();

//4 funcion allows to put X/O on array

    let putXO = (function(event){
        document.getElementById('dynamicBoard').addEventListener('click',function(event){
            // console.log("global turn is:" + globalTurn)
            if (roundCount == true){
                if (event.target.classList[0] == 'free'){
                    if (globalTurn % 2 == 0){
                        let addClass = event.target.classList.add('taken')
                        let rmClass = event.target.classList.remove('free')
                        let putX = event.target.innerHTML = "O"
                        roundCount = false

                    } else{
                        let addClass = event.target.classList.add('taken')
                        let rmClass = event.target.classList.remove('free')
                        let putX = event.target.innerHTML = "X"
                        roundCount = false

                    }}
                    
            } else {
            alert("Please pass it to another player with shift")
            }
            
        })
    })();
    
    

    let shiftPAss = (function(event){

        let XOChild = document.querySelectorAll('.XOChild');
        // let cell1 = document.querySelectorAll('.free')

        document.addEventListener('keydown',function(event){

            if (event.key == 'Shift'){
                if (globalTurn % 2 == 0){
                    console.log("its X turn")
                    // XOChild[0].setAttribute('id','turn')
                    // XOChild[1].setAttribute('id','')
                    globalTurn++
                    roundCount = true
                    console.log(countToEnd++)
                } else {
                    console.log("its O turn")
                    // XOChild[0].setAttribute('id','')
                    // XOChild[1].setAttribute('id','turn')
                    globalTurn++
                    roundCount = true
                    console.log(countToEnd++)

                }
            }

        })

    })();


//5 logic when the game is over and who won.
    let winning = (function(event){
        document.getElementById('dynamicBoard').addEventListener('click', function(event){
            let cel1 = document.getElementById('1')
            let cel2 = document.getElementById('2')
            let cel3 = document.getElementById('3')
            let cel4 = document.getElementById('4')
            let cel5 = document.getElementById('5')
            let cel6 = document.getElementById('6')
            let cel7 = document.getElementById('7')
            let cel8 = document.getElementById('8')
            let cel9 = document.getElementById('9')
            let winmsg = document.querySelector('.winning-message')
            let textdiv = document.createElement('div')
            winmsg.appendChild(textdiv)

        
        
            if (cel1.textContent =='X' && cel2.textContent=='X' && cel3.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel1.classList.add('win')
                cel2.classList.add('win')
                cel3.classList.add('win')
            }else if (cel1.textContent =='O'&& cel2.textContent=='O'&& cel3.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel1.classList.add('win')
                cel2.classList.add('win')
                cel3.classList.add('win')
            } else if (cel4.textContent=='X'&& cel5.textContent=='X'&& cel6.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel4.classList.add('win')
                cel5.classList.add('win')
                cel6.classList.add('win')
            } else if (cel4.textContent=='O'&& cel5.textContent=='O'&& cel6.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel4.classList.add('win')
                cel5.classList.add('win')
                cel6.classList.add('win')
            } else if (cel7.textContent=='X' && cel8.textContent=='X'&& cel9.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel8.classList.add('win')
                cel9.classList.add('win')
            } else if (cel7.textContent=='O'&& cel8.textContent=='O'&& cel9.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel8.classList.add('win')
                cel9.classList.add('win')
            } else if (cel9.textContent=='X'&& cel6.textContent=='X'&& cel3.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel9.classList.add('win')
                cel6.classList.add('win')
                cel3.classList.add('win')
            } else if (cel9.textContent=='O'&& cel6.textContent=='O'&& cel3.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel9.classList.add('win')
                cel6.classList.add('win')
                cel3.classList.add('win')
            } else if (cel8.textContent=='X'&& cel5.textContent=='X'&& cel2.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel8.classList.add('win')
                cel5.classList.add('win')
                cel2.classList.add('win')
            } else if (cel8.textContent=='O'&& cel5.textContent=='O'&& cel2.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')
                
                cel8.classList.add('win')
                cel5.classList.add('win')
                cel2.classList.add('win')
            } else if (cel7.textContent=='X'&& cel4.textContent=='X'&& cel1.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel4.classList.add('win')
                cel1.classList.add('win')
            } else if (cel7.textContent=='O'&& cel4.textContent=='O'&& cel1.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel4.classList.add('win')
                cel1.classList.add('win')
            } else if (cel9.textContent=='X'&& cel5.textContent=='X'&& cel1.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel9.classList.add('win')
                cel5.classList.add('win')
                cel1.classList.add('win')
            } else if (cel9.textContent=='O'&& cel5.textContent=='O'&& cel1.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')
                
                cel9.classList.add('win')
                cel5.classList.add('win')
                cel1.classList.add('win')
            } else if (cel7.textContent=='X'&& cel5.textContent=='X'&& cel3.textContent=='X'){
                textdiv.textContent="X Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel5.classList.add('win')
                cel3.classList.add('win')
            } else if (cel7.textContent=='O'&& cel5.textContent=='O'&& cel3.textContent=='O'){
                textdiv.textContent="O Wins!"
                winmsg.classList.add('show')

                cel7.classList.add('win')
                cel5.classList.add('win')
                cel3.classList.add('win')   
            } else{

                if (countToEnd==9){
                    textdiv.textContent="Draw!"
                    winmsg.classList.add('show')
                }
            
            }});
    })();

    let hover = (function(e){
        let XOHO = document.querySelectorAll('.free')
        XOHO.forEach(function(e){
            e.addEventListener('mouseenter',function(event){
                if (e.classList=='free' && roundCount==true){
                    if(globalTurn%2==0){
                    event.target.innerHTML="O"
                } else{
                    event.target.innerHTML="X"
                }}
            })
            e.addEventListener('mouseleave',function(event){
                if (e.classList=='free'){
                    event.target.innerHTML=""   
                }
        
            })
    })
    
    })();


    let addPlayers = (function(){

        let playerFactory = function(name, symbol){
            return{name ,symbol}
        }


        let startButton = document.getElementById('start').addEventListener('click',function(){
            let player1 = document.getElementById('p1').value
            let player1symbol= 'X'
            let player2 = document.getElementById('p2').value
            let player2symbol= 'O'
            let player1F = playerFactory(player1,player1symbol)
            let player2F = playerFactory(player2, player2symbol)

            let createConsole = (function(p1, p2){
                p1 = player1F.name
                p1s = player1F.symbol
                p2 = player2F.name
                p2s = player2F.symbol
                let header = document.querySelector('.header')
                let body = document.querySelector('body')
                header.classList.remove('show')
                
                // let playerOptions = document.querySelector('.playerOptions')
   
                let nuheader = document.createElement('div')
                let playerscontainter = document.createElement('div')
                let playerSymbolscontainter = document.createElement('div')

                let P1name = document.createElement('div')
                let P2name = document.createElement('div')
                let p1sym = document.createElement('div')
                let p2sym = document.createElement('div')

                body.appendChild(nuheader).classList.add('nuheader')
                nuheader.appendChild(playerscontainter).classList.add('pcont')
                nuheader.appendChild(playerSymbolscontainter).classList.add('pscont')


                playerscontainter.appendChild(P1name).classList.add('players')
                playerscontainter.appendChild(P2name).classList.add('players')
                playerSymbolscontainter.appendChild(p1sym).classList.add('XOChild')
                playerSymbolscontainter.appendChild(p2sym).classList.add('XOChild')
                P1name.setAttribute('id','1')
                P2name.setAttribute('id','2')
                p1sym.setAttribute('id','1')
                p2sym.setAttribute('id','2')
                P1name.textContent = p1
                P2name.textContent = p2
                p1sym.textContent = p1s
                p2sym.textContent = p2s
                let dynamicBoard = document.querySelector('#dynamicBoard');
                dynamicBoard.classList.add('show')

       
            })();   
        })
    })();

    let restartButton = (function(){
        let rstbut = document.getElementById('restartButton')
        rstbut.addEventListener('click',function(){
            console.log("sex")
            window.location.reload()
        })
    })();




})();

