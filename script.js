// let body = document.getElementsByTagName('body');
let container = document.createElement('div')
let playerNameInput = document.createElement('input');
let startCircleArrow = document.createElement('div');
let gameBoard = document.createElement('div');
let card = document.createElement('div');
let playerName = document.createElement('p')
let score = document.createElement('p')
let moves = document.createElement('p')
let level = document.createElement('p')
let reset = document.createElement('button')




let navigation = document.createElement('div')
navigation.classList.add(...['h-[10vh]', 'container-fluid', 'bg-gray-700/50', 'flex', 'justify-between', 'align-center', 'px-3'])

let scoreCount = 0;
let levelCount = 0;
let movesCount = 0;




gameBoard.classList.add("h-[70%]", 'w-[70%]','rounded', 'ml-[15%]', 'mt-12','flex-wrap', 'bg-gray-500', 'flex', 'justify-between')
card.classList.add('w-[24%]', 'ease-in-out', 'duration-300', 'rounded', 'h-[49%]', 'bg-gray-300', 'text-center', 'm-[1px]', 'text-8xl','flex', 'pt-14', 'align-center', 'justify-center');


// Add element to class 

document.body.appendChild(navigation)
document.body.appendChild(gameBoard)
navigation.appendChild(playerNameInput)
navigation.appendChild(startCircleArrow);
navigation.appendChild(playerName);
navigation.appendChild(playerName);
navigation.appendChild(score);
navigation.appendChild(level);
navigation.appendChild(moves);
navigation.appendChild(reset);


// Event Listenner

startCircleArrow.addEventListener('click', ()=> handleStart())
reset.addEventListener('click', ()=> handleReset())


// playerName.innerText = 'playerNameInput.value';
// score.innerText = 'playerNameInput.value';

let playerNameClassArray = ["text-white", 'text-2xl', 'text-center', 'my-5', 'capitalize', ]
let scoreClassArray = [ 'text-2xl', 'my-5', 'capitalize', ]
let levelClassArray = ["text-white", 'text-2xl',  'my-5', 'capitalize', ]
let resetClassArray = ["text-white", 'text-1xl', 'my-5', 'capitalize', 'bg-gray-700', 'rounded', 'px-2', 'hide' ]

playerName.classList.add(...playerNameClassArray);
score.classList.add(...playerNameClassArray);
level.classList.add(...playerNameClassArray);
reset.classList.add(...resetClassArray)
moves.classList.add(...playerNameClassArray)



startCircleArrow.innerHTML = `<span class="material-symbols-outlined circle-arrow center">arrow_forward</span>`
startCircleArrow.style.color = '#f2f2f2'
container.classList.add('container')

// document.body.appendChild(container);


playerNameInput.classList.add('center')
playerNameInput.classList.add('input-name')
playerNameInput.placeholder = "Enter Name";
playerName.required = true;

playerNameInput.addEventListener('change', ()=> handleChange())

let cardFront = document.createElement('div');
let cardBack = document.createElement('div');
cardBack.classList.add('w-[24%]', 'ease-in-out', 'duration-300', 'rounded', 'h-[49%]', 'bg-red-300', 'text-center', 'm-[1px]', 'text-8xl','flex', 'pt-14', 'align-center', 'justify-center');


let innerCard = document.createElement('div');
innerCard.appendChild(cardFront);
innerCard.appendChild(cardBack);

// card.innerHTML = innerCard.outerHTML;
// console.log(innerCard)

let car =['😆','😅','🤣','😊','😇','🥰','😍','🤩']
car.forEach(i=>{
    card.innerText = i;
    // console.log(gameBoard.innerHTML = card)
    
    // innerCard.innerHTML
    gameBoard.innerHTML += card.outerHTML;
    // gameBoard.innerHTML += innerCard;

    // console.log(gameBoard.innerHTML)
})


gameBoard.addEventListener('click',(e)=>{
    // console.log(e.target.style = 'transform: rotateY(180deg);')
    e.target.classList.add('flip');
    setTimeout(() => {
        e.target.classList.remove('flip')
    }, 500);
    console.log(e.target)
})





// Funtions
function handleChange(){
    // e.preventDefault();
    // console.log('kol')
}

function handleStart(){
    playerNameInput.classList.toggle('hidden')
    startCircleArrow.classList.toggle('hidden')
    // gameBoard.classList.remove('hidden'); //will start

    // startGame();


    // document.appendChild(gameBoard)
    // reset.classList.toggle('hidden')
    // navigation.classList.toggle('hidden')
    playerName.innerText = playerNameInput.value;
    score.innerText = `Score: ${scoreCount}`;
    level.innerText = `level: ${levelCount}`;
    moves.innerText = `moves: ${movesCount}`;
    console.log(playerName);
    reset.innerText = "Reset Game"
}


function handleReset(){
    playerNameInput.classList.toggle('hidden')
    startCircleArrow.classList.toggle('hidden')
    // navigation.classList.add('hidden')

}


function startGame(){
    
}