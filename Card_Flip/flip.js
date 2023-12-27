let cardsArray = [
    {
        'name' : 'CSS',
        'image' : 'img1.jpg',
    },
    {
        'name' : 'HTML',
        'image' : 'img2.jpg',
    },
    {
        'name' : 'JS',
        'image' : 'img3.jpg',
    },
    {
        'name' : 'Python',
        'image' : 'wwwe.png',
    },
    {
        'name' : 'php',
        'image' : 'wwwe1.png',
    },
    {
        'name' : 'GO',
        'image' : 'wwwe2.png',
    },
];
let parentDiv = document.querySelector('#card-section');
let gameCard = cardsArray.concat(cardsArray);
let ShuffleCard = Array.from(gameCard).sort(()=> 0.5-Math.random());
for (let i = 0; i<ShuffleCard.length; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = ShuffleCard[i].name;
    // childDiv.style.backgroundImage = `url(${ShuffleCard[i].image})`;

    const front_Div = document.createElement('div');
    front_Div.classList.add('front-card');

    const back_Div = document.createElement('div');
    back_Div.classList.add('back-card');

    back_Div.style.backgroundImage = `url(${ShuffleCard[i].image})`;

    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_Div);
    childDiv.appendChild(back_Div);
}
let clickCount = 0;
let firstCard = "";
let secondCard = "";

const cardMatch = ()=>{
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem)=>{
        curElem.classList.add('card-match')
    })
}

const resetCard = ()=>{
     firstCard = "";
     secondCard = "";
    clickCount = 0;
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected');
    })
}

parentDiv.addEventListener('click',(event)=>{
    const curCard = event.target;
    if (curCard.id === "card-section"){return false}
    clickCount++;
    if (clickCount<3){
        if (clickCount===1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        if (firstCard !== "" && secondCard !==""){
            if (firstCard===secondCard){
                setTimeout(()=>{
                    cardMatch();
                    resetCard();
                },1000)
            }else{
                setTimeout(()=>{
                    resetCard();
                })
            }
        }
    }
    // curCard.classList.add('card_selected');
})