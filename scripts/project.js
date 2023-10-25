const questionElement = document.getElementById('question');
const optionsElements = Array.from(document.querySelectorAll('#options li'));
const scoreElement = document.getElementById('score');
const playAgainElement = document.getElementById('play_again');
const backElement = document.getElementById('back');

const videoGamesQuestionsUrl = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple';

let score = 0;

const getTrivia = async () => {
    const response = await fetch(videoGamesQuestionsUrl);
    let trivia = await response.json();
    displayQuestion(trivia);
}

const displayQuestion = (trivias) => {
    let index = Math.floor(Math.random() * trivias.results.length);
    let currentQuestion = trivias.results[index];
    
    questionElement.innerHTML = currentQuestion.question;
    
    let options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    
    options.sort(() => Math.random() - 0.5); 
    
    optionsElements.forEach((optionElement, i) => {
        optionElement.innerHTML = options[i];
        optionElement.onclick = () => {
            if (options[i] === currentQuestion.correct_answer) {
                score += 10;
                scoreElement.innerHTML = 'Score: ' + score;  
            }

            
            getTrivia();
        };
    });
}   

playAgainElement.addEventListener('click', () => window.location.href = 'project.html');
backElement.addEventListener('click', () => window.location.href = 'index.html');
getTrivia();
