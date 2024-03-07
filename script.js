//Tic Tac Toe Game in JavaScript
/*
game  -> 9 boxes or number
two player ie player1 and player2 
two Symbol cross and zero 
palyers takes any Symbol 
player1 take cross Symbol and player2 take zero Symbol
win whose those palyer who same Symbol in line ie 0 0 0 or * * *

win orientation is horizantal (line) or vertical (row) or diganol

horizantal ma winnin pattern first line , second line , third line
winning pattern = 0,1,2
winning pattern = 3,4,5
winning pattern = 6,7,8
vertical winning pattern 
winning pattern = 0,3,6
winning pattern = 1,4,7
winning pattern = 2,5,8
Diagonal winning pattern
winning pattern = 0,4,8
winning pattern =2,4,6
//--------------------
8 winnin pattern  

winning pattern = 0,1,2
winning pattern = 3,4,5
winning pattern = 6,7,8
winning pattern = 0,3,6
winning pattern = 1,4,7
winning pattern = 2,5,8
winning pattern = 0,4,8
winning pattern =2,4,6

*/

let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
//console.log(boxes,resetBtn);

let turn0=true; // playerX , player0
/*
//single line array
let arr=["apple","banana","litchi"];
//2D array
let arr2=[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];
//console.log(arr,arr2);
console.log(arr2[0]);
console.log(arr2[0][0]);
console.log(arr2[0][1]);
console.log(arr2[1]);
console.log(arr2[1][0]);
console.log(arr2[1][1]);
console.log(arr2[2]);

console.log(arr2[2][0]);
console.log(arr2[2][1]);
*/
const winPatterns=[
[0,1,2],[0,3,6],[0,4,8],[1,4,7],
[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];


const resetGame = () =>{
	turn0=true; 
	enableBoxes();
	msgContainer.classList.add("hide")
}


boxes.forEach((box) =>{
box.addEventListener("click",()=>{
	//console.log("box was clicked");
	//box.innerText="ABCD";
	if(turn0){
	//player0
    box.innerText="0";
    turn0=false;	
	}
	else{
	//playerY
    box.innerText="Y";
    turn0=true;	
	}
	box.disabled=true;
	
	checkWinner();
})	
})
const disabledBoxes = ()=>{
	for (let box of boxes){
		box.disabled=true;
	}
}

const enableBoxes = ()=>{
	for (let box of boxes){
		box.disabled=false;
		box.innerText=""
	}
}

const showWinner =(winner) =>{
	msg.innerText=`Congratulations , Winner is ${winner}`;
	msgContainer.classList.remove("hide");
	disabledBoxes();
}


const checkWinner = ()=>{
	for(pattern of winPatterns){
		//console.log(pattern);
		//console.log(pattern[0],pattern[1],pattern[2]);
		//console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
		
	//console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
	let pos1Val=boxes[pattern[0]].innerText;
	let pos2Val=boxes[pattern[1]].innerText;
	let pos3Val=boxes[pattern[2]].innerText;
		
		if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
			if(pos1Val === pos2Val && pos2Val === pos3Val){
				//console.log("winner",pos1Val);
				showWinner(pos1Val)
			}
		}
	}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);