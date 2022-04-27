const buttonStart = document.querySelector('#startButton');
const h3 = document.querySelector('#h3');
const input = document.querySelector('#input');
const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
let arrquotes = [];
let arrspan = [];
let arrLetters = [];
let userWords = [];
let userLetters = '';
let start;
let end;

buttonStart.onclick = function () {
    let rand = Math.floor(Math.random()*quotes.length);
    
    arrquotes = quotes[rand].split(" ");
    arrLetters = quotes[rand].split("");
    
    arrspan = arrquotes.map((el) => {
        return `<span>${el} </span>`;
    }); 
    // h3.innerHTML = arrspan.join(''); так предложено в учебнике
    h3.insertAdjacentHTML('beforeend', arrspan.join(' ')); // а я делаю черех другое свойство
    h3.childNodes[0].className = 'wordstyle';

    input.classList.remove('none');
    buttonStart.classList.add ('none');
    start = new Date(). getTime();
}

let indexOfLetter = 0;
let indexOfWord = 0;
let indexOfWordStyle = 0;

input.addEventListener('input', function () {
    
    userLetters = input.value;
    console.log(userLetters);
    indexOfLetter = userLetters.length - 1;
    
    console.log( 'sas', arrquotes[indexOfWord].slice(0,indexOfLetter+1))
    if(input.classList.contains('mistake') && userLetters == arrquotes[indexOfWord].slice(0,indexOfLetter+1)){

        input.classList.remove('mistake')
    }

    if (userLetters[indexOfLetter] === arrquotes[indexOfWord][indexOfLetter]
        || userLetters[indexOfLetter] === ' ') {
        console.log('correct');
        console.log(userLetters.trim(), arrquotes[indexOfWord])
        console.log(indexOfLetter); 


        if (indexOfWord  === (arrquotes.length - 1)) {
            console.log('stop');
            end = new Date(). getTime();
            let resultTime = (end - start) / 1000;
            alert (`You're time is ${resultTime} sec`);
            input.value = '';
            document.location.reload();
        }
        if (userLetters[indexOfLetter] === ' ') {
            console.log(userLetters.trim(), arrquotes[indexOfWord])
            if(userLetters.trim() === arrquotes[indexOfWord]){
                indexOfLetter = 0;
                h3.childNodes[indexOfWordStyle].className = '';
                indexOfWord ++;
                indexOfWordStyle = indexOfWordStyle + 2;
                input.value = '';
                userLetters = '';
                h3.childNodes[indexOfWordStyle].className = 'wordstyle';
            }
        }
    } else {
        input.classList.add('mistake');
    }
})

