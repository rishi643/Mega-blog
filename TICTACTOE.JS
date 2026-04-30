let boxes=document.getElementsByClassName('box');
let turninformation=document.getElementById('info')
let clicksound=new Audio('ui.mp3.wav')
let gamemusic = new Audio("mu.mp3.mp3")

//gamemusic.play()
turninformation.innerText="Turn of X" 
let X_VALUE="X";
function changeTurn(){
   return X_VALUE ==="X"?"O":"X";
   
}


Array.from(boxes).forEach(box => {
    box.addEventListener('click',placing)
    
})
function placing(e){

if(e.target.innerText== ""){
e.target.innerHTML=X_VALUE;


 X_VALUE= changeTurn();
 console.log(X_VALUE);
 clicksound.play();
 turninformation.innerText="Turn of " + X_VALUE;
 winninglogic();
}
}
function winninglogic(){
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{

        if((boxes[e[0]].innerText == boxes[e[1]].innerText) && (boxes[e[2]].innerText == boxes[e[1]].innerText)&&(boxes[e[0]].innerText !== "")){
            console.log("won")
            turninformation.innerHTML=boxes[e[0]].innerText + " is WON"
           
           
            setTimeout( "location.reload()",2000)
        }

    })}
    let reset = document.getElementById('restart')
  reset.addEventListener('click' ,()=>{
    console.log("clicked")
    location.reload();
    
  })
    
