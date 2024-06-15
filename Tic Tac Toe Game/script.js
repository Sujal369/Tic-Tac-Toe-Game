let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector('#msg');
let body = c=document.querySelector("body");

let turnO = true; //turns of player

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was click");
        if(turnO){
            box.innerText = "O";
            box.style.color = 'green';
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = 'red';
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "Sai";
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations , Winner is ${Winner}`;
    msg.style.backgroundColor = "green";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newGame.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);