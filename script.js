function createPlayer(name, sign) {
    return {
      name: name,
      sign: sign,
      getPlayer() {
        return name + ' ' + sign;
      },
    };
}

const players=[];


function getNume(){
    document.body.innerHTML=`<form id="forma"><div class="intro">Player 1 Name: </div><input type="text" class="input" id="numeprim">
    <div class="intro">Player 2 Name: </div><input type="text" class="input" id="numedoi">
    </form><button type="button" id="start" onclick="citireJucatori()">START</button>`;
}

function citireJucatori(){
    let nume1=document.getElementById("numeprim").value;
    let nume2=document.getElementById("numedoi").value;
    let Player1=new createPlayer(nume1, 'X');
    let Player2=new createPlayer(nume2, 'O');
    players.push(Player1);
    players.push(Player2);
    console.log(players);
    startGame();
}

function startGame(){
    document.body.innerHTML=``;
    document.body.innerHTML=`<div id="joc">
    <div class="rand">
        <div class="celula" id="celula-1" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-2" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-3" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
    <div class="rand">
        <div class="celula" id="celula-4" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-5" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-6" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
    <div class="rand">
        <div class="celula" id="celula-7" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-8" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-9" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
</div>
<div class="intro" id="gata"></div>
<button id="buttonnou" onclick="startGame()"></button>
<button id="menu" onclick="location.reload()"></button>`;
    
let tura=0;
    let patrate=[];
    patrate=document.querySelectorAll(".celula");
    patrate.forEach((patrat)=>{patrat.addEventListener("click", function(event){
    if(!gameOver()){    
        if(tura==0 || tura%2==0){
        patrat.innerHTML=`<img src="x.png" >`;
        patrat.readOnly = true;
        console.log(patrat.id);
        }
    else{
        patrat.innerHTML=`<img src="o.png" >`;
        patrat.readOnly = true;
    }
    patrat.removeEventListener("click", arguments.callee);
    patrat.style.pointerEvents="none";
    tura++;}

    if (gameOver() && tura%2==1) {
                    document.getElementById("gata").innerText = `Game Over! ${players[0].name} has won!`;
                    document.getElementById("buttonnou").innerText ="RESTART";
                    document.getElementById("menu").innerText="MAIN MENU";
                    document.getElementById("joc").style.marginBottom="-13.2vh";
                }
                if (gameOver() && tura%2==0) {
                    document.getElementById("gata").innerText = `Game Over! ${players[1].name} has won!`;
                    document.getElementById("buttonnou").innerText ="RESTART";
                    document.getElementById("menu").innerText="MAIN MENU";
                    document.getElementById("joc").style.marginBottom="-13.2vh";
                }
                else if (!gameOver() && Array.from(patrate).every(patrat => patrat.innerHTML !== "")) {
                    document.getElementById("gata").innerText = `It's a Draw!`;
                    document.getElementById("buttonnou").innerText = "RESTART";
                    document.getElementById("menu").innerText = "MAIN MENU";
                    document.getElementById("joc").style.marginBottom = "-13.2vh";
                    patrate.forEach(patrat => patrat.removeEventListener("click", arguments.callee));
                    return; // Add this return statement to exit the function after displaying the draw message
                }
                

})})    
}
function gameOver(){
    let patrat1=document.getElementById("celula-1").innerHTML;
    let patrat2=document.getElementById("celula-2").innerHTML;
    let patrat3=document.getElementById("celula-3").innerHTML;
    let patrat4=document.getElementById("celula-4").innerHTML;
    let patrat5=document.getElementById("celula-5").innerHTML;
    let patrat6=document.getElementById("celula-6").innerHTML;
    let patrat7=document.getElementById("celula-7").innerHTML;
    let patrat8=document.getElementById("celula-8").innerHTML;
    let patrat9=document.getElementById("celula-9").innerHTML;
    if ((patrat1 && patrat1 === patrat2 && patrat2 === patrat3) ||
    (patrat4 && patrat4 === patrat5 && patrat5 === patrat6) ||
    (patrat7 && patrat7 === patrat8 && patrat8 === patrat9) ||
    (patrat1 && patrat1 === patrat4 && patrat4 === patrat7) ||
    (patrat2 && patrat2 === patrat5 && patrat5 === patrat8) ||
    (patrat3 && patrat3 === patrat6 && patrat6 === patrat9) ||
    (patrat1 && patrat1 === patrat5 && patrat5 === patrat9) ||
    (patrat3 && patrat3 === patrat5 && patrat5 === patrat7)) 
    {
    return true; 
    }
    else return false;
}


function gameOver2(){
    let patrat1=document.getElementById("celula-1").innerHTML;
    let patrat2=document.getElementById("celula-2").innerHTML;
    let patrat3=document.getElementById("celula-3").innerHTML;
    let patrat4=document.getElementById("celula-4").innerHTML;
    let patrat5=document.getElementById("celula-5").innerHTML;
    let patrat6=document.getElementById("celula-6").innerHTML;
    let patrat7=document.getElementById("celula-7").innerHTML;
    let patrat8=document.getElementById("celula-8").innerHTML;
    let patrat9=document.getElementById("celula-9").innerHTML;
    if ((patrat1 && patrat1 === patrat2 && patrat2 === patrat3) ||
    (patrat4 && patrat4 === patrat5 && patrat5 === patrat6) ||
    (patrat7 && patrat7 === patrat8 && patrat8 === patrat9) ||
    (patrat1 && patrat1 === patrat4 && patrat4 === patrat7) ||
    (patrat2 && patrat2 === patrat5 && patrat5 === patrat8) ||
    (patrat3 && patrat3 === patrat6 && patrat6 === patrat9) ||
    (patrat1 && patrat1 === patrat5 && patrat5 === patrat9) ||
    (patrat3 && patrat3 === patrat5 && patrat5 === patrat7)) 
    {
    return true; 
    }
    else if (
    patrat1 && patrat2 && patrat3 &&
    patrat4 && patrat5 && patrat6 &&
    patrat7 && patrat8 && patrat9
    ){
        return true;
    }
    else return false;
}


function startAI(){
    document.body.innerHTML=``;
    document.body.innerHTML=`<div id="joc">
    <div class="rand">
        <div class="celula" id="celula-1" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-2" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-3" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
    <div class="rand">
        <div class="celula" id="celula-4" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-5" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-6" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
    <div class="rand">
        <div class="celula" id="celula-7" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-8" style="display: flex; justify-content: center; align-items: center;"></div>
        <div class="celula" id="celula-9" style="display: flex; justify-content: center; align-items: center;"></div>
    </div>
</div>
<div class="intro" id="gata"></div>
<button id="buttonnou" onclick="startAI()"></button>
<button id="menu" onclick="location.reload()"></button>`;
    
let tura=0;
    let patrate=[];
    let randomElement;
    patrate=document.querySelectorAll(".celula");
    let nrtst;

    let numere=[1,2,3,4,5,6,7,8,9];
    patrate.forEach((patrat)=>{patrat.addEventListener("click", function(event){
    if(!gameOver2()){  
        if (gameOver2()) {
            document.getElementById("gata").innerText = `Game over!`;
            document.getElementById("buttonnou").innerText ="RESTART";
            document.getElementById("menu").innerText="MAIN MENU";
            document.getElementById("joc").style.marginBottom="-13.2vh";
            patrate.forEach(patrat => patrat.removeEventListener("click", arguments.callee));
            return;
        }
        patrat.innerHTML=`<img src="x.png" >`;
        patrat.style.pointerEvents="none";
        tura++;
        console.log(tura);
        if(patrat.id=="celula-1"){
            numere[0]=0;
        }
        if(patrat.id=="celula-2"){
            numere[1]=0;
        }
        if(patrat.id=="celula-3"){
            numere[2]=0;
        }
        if(patrat.id=="celula-4"){
            numere[3]=0;
        }
        if(patrat.id=="celula-5"){
            numere[4]=0;
        }
        if(patrat.id=="celula-6"){
            numere[5]=0;
        }
        if(patrat.id=="celula-7"){
            numere[6]=0;
        }
        if(patrat.id=="celula-8"){
            numere[7]=0;
        }
        if(patrat.id=="celula-9"){
            numere[8]=0;
        }
        if (gameOver2()) {
            document.getElementById("gata").innerText = `Game over!`;
            document.getElementById("buttonnou").innerText ="RESTART";
            document.getElementById("menu").innerText="MAIN MENU";
            document.getElementById("joc").style.marginBottom="-13.2vh";
            patrate.forEach(patrat => patrat.removeEventListener("click", arguments.callee));
            return;
        }
        do {
            randomElement = numere[Math.floor(Math.random() * numere.length)];
            nrtst = randomElement - 1;
        } while (numere[nrtst] === 0||randomElement===0);
        numere[nrtst]=0;
        console.log(randomElement);
        console.log(numere);
        if(randomElement==1){
            document.getElementById("celula-1").innerHTML=`<img src="o.png" >`;
            numere[0]=0;
        }
        if(randomElement==2){
            document.getElementById("celula-2").innerHTML=`<img src="o.png" >`;
            numere[1]=0;
        }
        if(randomElement==3){
            document.getElementById("celula-3").innerHTML=`<img src="o.png" >`;
            numere[2]=0;
        }
        if(randomElement==4){
            document.getElementById("celula-4").innerHTML=`<img src="o.png" >`;
            numere[3]=0;
        }
        if(randomElement==5){
            document.getElementById("celula-5").innerHTML=`<img src="o.png" >`;
            numere[4]=0;
        }
        if(randomElement==6){
            document.getElementById("celula-6").innerHTML=`<img src="o.png" >`;
            numere[5]=0;
        }
        if(randomElement==7){
            document.getElementById("celula-7").innerHTML=`<img src="o.png" >`;
            numere[6]=0;
        }
        if(randomElement==8){
            document.getElementById("celula-8").innerHTML=`<img src="o.png" >`;
            numere[7]=0;
        }
        if(randomElement==9){
            document.getElementById("celula-9").innerHTML=`<img src="o.png" >`;
            numere[8]=0;
        }
        document.getElementById(`celula-${randomElement}`).removeEventListener("click",arguments.callee);
       // randomIntFromInterval(1, 9);

        let dairemove=document.getElementById(`celula-${randomElement}`);
        dairemove.style.pointerEvents="none";
        console.log(dairemove.removeEventListener("click",arguments.callee));
    patrat.removeEventListener("click", arguments.callee);

    tura++;
    console.log(tura);
 }
console.log("bun");
 if (gameOver()) {
    document.getElementById("gata").innerText = `Game over!`;
    document.getElementById("buttonnou").innerText ="RESTART";
    document.getElementById("menu").innerText="MAIN MENU";
    document.getElementById("joc").style.marginBottom="-13.2vh";
    patrate.forEach(patrat => patrat.removeEventListener("click", arguments.callee));
} else if (tura >= 9) {
    document.getElementById("gata").innerText = `It's a Draw!`;
    document.getElementById("buttonnou").innerText ="RESTART";
    document.getElementById("menu").innerText="MAIN MENU";
    document.getElementById("joc").style.marginBottom="-13.2vh";
    patrate.forEach(patrat => patrat.removeEventListener("click", arguments.callee));
}} )})}