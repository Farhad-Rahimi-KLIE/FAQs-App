let ul_1 = document.querySelector('.option1');
let ul_2 = document.querySelector('.option2');
let ul_3 = document.querySelector('.option3');

let q1 = document.querySelector('.q1');
let q2 = document.querySelector('.q2');
let q3 = document.querySelector('.q3');

let Survey = document.querySelector('.survey');
let End = document.querySelector('.end');

// Now Apply main Logic
ul_1.addEventListener('click',()=>{
    q1.style.display = 'none';
    q2.style.display = 'block';
})
ul_2.addEventListener('click',()=>{
    q2.style.display = 'none';
    q3.style.display = 'block';
})
ul_3.addEventListener('click',()=>{
    q3.style.display = 'none'
    Survey.style.display = 'none';
    End.style.display = 'block';
})