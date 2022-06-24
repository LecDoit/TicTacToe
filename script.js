
// Modules: only one - GameBoard, displayControlers
// Factory: more than one - players


//2 - everything is in gameboard
let gameboard = (function(player) {

    this.player = player;
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
            // let zig = document.getElementById(i)
            // zig.addEventListener('mouseenter',function(e){
            //     if (roundCount=true){
            //        zig.innerHTML="X"
            // } else {
            //     zig.innerHTML="O"
            // }

            // })

                   

            // zig.addEventListener('mouseleave',function(e){
            //     zig.innerHTML=""})
            
            
        }
    })();

//4 funcion allows to put X/O on array

    
    // document.querySelector('body').addEventListener('click',function(event){
    //     if (roundCount == true){
    //         if (event.target.classList[0] == 'free'){
    //             if (globalTurn % 2 == 0){
    //                 let addClass = event.target.classList.add('taken')
    //                 let rmClass = event.target.classList.remove('free')
    //                 let putX = event.target.innerHTML = "O"
    //                 roundCount = false
    //                 winning()
    //             } else{
    //                 let addClass = event.target.classList.add('taken')
    //                 let rmClass = event.target.classList.remove('free')
    //                 let putX = event.target.innerHTML = "X"
    //                 roundCount = false
    //                 winning()
    //             }}console.log('field has been chosen and roundCount is ' + roundCount)
    //     } else {
    //     alert("Please pass it to another player with shift")
    //     }
    // })


    let putXO = (function(event){
        document.getElementById('dynamicBoard').addEventListener('click',function(event){
            console.log("global turn is:" + globalTurn)
            if (roundCount == true){
                if (event.target.classList[0] == 'free'){
                    if (globalTurn % 2 == 0){
                        let addClass = event.target.classList.add('taken')
                        let rmClass = event.target.classList.remove('free')
                        let putX = event.target.innerHTML = "O"
                        roundCount = false
                        let mimi = document.getElementById(event.target.id)
                        // mimi.addEventListener('mouseenter',function(e){
                        //     mimi.innerHTML="XX"
                        
                        // })
                        // winning()
                    } else{
                        let addClass = event.target.classList.add('taken')
                        let rmClass = event.target.classList.remove('free')
                        let putX = event.target.innerHTML = "X"
                        roundCount = false
                        // winning()
                    }}
                    // console.log('field has been chosen and roundCount is ' + roundCount)
            } else {
            alert("Please pass it to another player with shift")
            }
        })
    })();
    
    

    let shiftPAss = (function(event){
        let XOChild = document.querySelectorAll('.XOChild');
        document.addEventListener('keydown',function(event){
            if (event.key == 'Shift'){
                if (globalTurn % 2 == 0){
                    console.log("its X turn")
                    XOChild[0].setAttribute('id','turn')
                    XOChild[1].setAttribute('id','')
                    globalTurn++
                    roundCount = true
                } else {
                    console.log("its O turn")
                    XOChild[0].setAttribute('id','')
                    XOChild[1].setAttribute('id','turn')
                    globalTurn++
                    roundCount = true
                }
            }console.log('passing to next player ' + roundCount)
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
        
        
            if (cel1.textContent =='X' && cel2.textContent=='X' && cel3.textContent=='X'){
                alert('X won!')
                cel1.classList.add('win')
                cel2.classList.add('win')
                cel3.classList.add('win')
            }else if (cel1.textContent =='O'&& cel2.textContent=='O'&& cel3.textContent=='O'){
                alert('O won!')
                cel1.classList.add('win')
                cel2.classList.add('win')
                cel3.classList.add('win')
            } else if (cel4.textContent=='X'&& cel5.textContent=='X'&& cel6.textContent=='X'){
                alert('X won!')
                cel4.classList.add('win')
                cel5.classList.add('win')
                cel6.classList.add('win')
            } else if (cel4.textContent=='O'&& cel5.textContent=='O'&& cel6.textContent=='O'){
                alert('O won!')
                cel4.classList.add('win')
                cel5classList.add('win')
                cel6.classList.add('win')
            } else if (cel7.textContent=='X' && cel8.textContent=='X'&& cel9.textContent=='X'){
                alert('X won!')
                cel7.classList.add('win')
                cel8.classList.add('win')
                cel9.classList.add('win')
            } else if (cel7.textContent=='O'&& cel8.textContent=='O'&& cel9.textContent=='O'){
                alert('O won!')
                cel7.classList.add('win')
                cel8.classList.add('win')
                cel9.classList.add('win')
            } else if (cel9.textContent=='X'&& cel6.textContent=='X'&& cel3.textContent=='X'){
                alert('X won!')
                cel9.classList.add('win')
                cel6.classList.add('win')
                cel3.classList.add('win')
            } else if (cel9.textContent=='O'&& cel6.textContent=='O'&& cel3.textContent=='O'){
                alert('O won!')
                cel9.classList.add('win')
                cel6.classList.add('win')
                cel3.classList.add('win')
            } else if (cel8.textContent=='X'&& cel5.textContent=='X'&& cel2.textContent=='X'){
                alert('X won!')
                cel8.classList.add('win')
                cel5.classList.add('win')
                cel2.classList.add('win')
            } else if (cel8.textContent=='O'&& cel5.textContent=='O'&& cel2.textContent=='O'){
                alert('O won!')
                cel8.classList.add('win')
                cel5.classList.add('win')
                cel2.classList.add('win')
            } else if (cel7.textContent=='X'&& cel4.textContent=='X'&& cel1.textContent=='X'){
                alert('X won!')
                cel7.classList.add('win')
                cel4.classList.add('win')
                cel1.classList.add('win')
            } else if (cel7.textContent=='O'&& cel4.textContent=='O'&& cel1.textContent=='O'){
                alert('O won!')
                cel7.classList.add('win')
                cel4.classList.add('win')
                cel1.classList.add('win')
            } else if (cel9.textContent=='X'&& cel5.textContent=='X'&& cel1.textContent=='X'){
                alert('X won!')
                cel9.classList.add('win')
                cel5.classList.add('win')
                cel1.classList.add('win')
            } else if (cel9.textContent=='O'&& cel5.textContent=='O'&& cel1.textContent=='O'){
                alert('O won!')
                cel9.classList.add('win')
                cel5.classList.add('win')
                cel1.classList.add('win')
            } else if (cel7.textContent=='X'&& cel5.textContent=='X'&& cel3.textContent=='X'){
                alert('X won!')
                cel7.classList.add('win')
                cel5.classList.add('win')
                cel3.classList.add('win')
            } else if (cel7.textContent=='O'&& cel5.textContent=='O'&& cel3.textContent=='O'){
                alert('O won!')
                cel7.classList.add('win')
                cel5.classList.add('win')
                cel3.classList.add('win')   
            } else{
                console.log(countToEnd++)
                if (countToEnd==9){
                    alert("draw!")
                }
            
            }});
    })();




    // let hover = (function(e){
        
    //     for (let i=9; i>0; i--){
    //     let XOHO = document.getElementById(i)
       
    //     if (roundCount == true && XOHO.classList == 'free' && globalTurn % 2==0){
    //         XOHO.addEventListener('mouseenter',function(event){
    //         XOHO.innerHTML="X"
            
    //         })
    //         XOHO.addEventListener('mouseleave',function(event){
    //         // XOHO.innerHTML=""
                
    //         })
        
    //     }else  {
    //         XOHO.addEventListener('mouseenter',function(event){
    //         XOHO.innerHTML="O"
    //     })
    //         XOHO.addEventListener('mouseleave',function(event){
    //         // XOHO.innerHTML=""
    //     })

    //     }
    // }

    // })();
})();

// let player = function(name,position,symbol){
//     this.name = name;
//     this.position = position;
//     this.symbol = symbol;
// }

// let playerFactory = function(name, position,symbol){
//     return {name,position,symbol}
// }

// let pika =  new player('pika',"first","cross")
// let pikaF =  playerFactory('pika',"first","cross")





// let single = document.getElementById('1')
// single.addEventListener('mouseenter',function(e){
//     single.textContent="x"
//     console.log(single.textContent)
// })
// single.addEventListener('mouseleave',function(e){
//     single.textContent=""
// })


// let creating = (function(){
//     let x = document.querySelectorAll('.example')
//         x.forEach(function(e){
//             e.preventDefault;
//             e.addEventListener('mouseenter',function(e){
//                 e.textContent="x"
//                 e.innerHTML= '<p>x</p>'
//                 console.log(e)
//                 // x.target.classList.add('hover')
//             })
//         })
// })()

