const quizdata=[
    {
    question:"which language runs in a web browser",
        a:"Java",
        b:"C++",
        c:"JavaScript",
        d:"Python",
        correct:"c"
    },
    {
        question: "What does css Statnd for?",
        a:"Cascaded style system",
        b:"Cascading style sheet",
        c:"Central style sheet",
        d:"cars servs sailboat",
        correct:"b"
    },
    {
        question:"What does HTML stand for?",
        a:"Hyper Text Markup Language",
        b:"Hyper Text markdown Language",
        c:"Hello Text markup Language",
        d:"bla bla bla",
        correct: "a",
    }
]
const questionE1=document.getElementById('question');
const quiz=document.getElementById('quiz');
const answerE1s=document.querySelectorAll('.answer');
const a_text=document.getElementById('a-text');
const b_text=document.getElementById('b-text');
const c_text=document.getElementById('c-text');
const d_text=document.getElementById('d-text');
const btn=document.getElementById('btn');

let currentQuiz=0;
let score=0;
loadQuiz();
function loadQuiz(){

    deselectAnswers();
    const currentQuizData=quizdata[currentQuiz];
    questionE1.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
}
function deselectAnswers() {
    answerE1s.forEach((answerEl) => (answerEl.checked = false));
}

function checkedAns(){
    let answer;
    answerE1s.forEach((ansl)=>{
        if(ansl.checked){
            answer=ansl.id;
        }
    })
    return answer;
}
btn.addEventListener('click',()=>{

    let ans=checkedAns();
    if(ans) {
        if (ans === quizdata[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;

    if(currentQuiz<quizdata.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML=`<h2> You have correctly answerd ${score}/${quizdata.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
        `

    }

})



