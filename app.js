
  const firebaseConfig = {
    apiKey: "AIzaSyDqUSNtbC0PApMm8tChiAnwgjTVDvuRRlw",
    authDomain: "quiz-app-f6c79.firebaseapp.com",
    databaseURL: "https://quiz-app-f6c79-default-rtdb.firebaseio.com",
    projectId: "quiz-app-f6c79",
    storageBucket: "quiz-app-f6c79.appspot.com",
    messagingSenderId: "283668629810",
    appId: "1:283668629810:web:8b85be1e4ec895247d2f2b",
    measurementId: "G-6HRPLN91PX"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  





var questions = [
    {
      question: "Q:1 HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Q:2 CSS Stands for?",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Q:3 Which tag is used for most large heading?",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Q:4 Which tag is used to make element unique? ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q:5 Any element assigned with id, can be get in css? ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "Q:6 CSS can be used with ______ methods? ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "Q:7 In JS variable types are ____________? ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "Q:8 In array we can use key name and value? ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q:9 toFixed() is used to define length of decimal? ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "Q:10 push() method is used to add element in the start of array? ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];

var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var timer = document.getElementById("timer")
var index = 0;
var score = 0;
var min = 1;
var sec = 29;

var clear = setInterval(function (){
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if(sec < 0){
        min--;
        sec = 59;
        if(min < 0){
        min= 1;
        sec= 59;
            nextQuestion()
        }
    }
}, 1000);
    


function nextQuestion(){
    var getOPtions = document.getElementsByName("option")
    for (var i= 0; i < getOPtions.length; i++){
        if(getOPtions[i].checked) {
            var sectedAns = getOPtions[i].value;
            var selectedQues = questions[index -1].question;
            var selectedOpt = questions[index -1][`option${sectedAns}`];
            var correctAns = questions[index-1]["corrAnswer"];
            var id = Date.now().toString(26);

            var obj = {
              Question:selectedQues,
              UserAns:selectedOpt,
              CorrectAns:correctAns,
            }
            firebase.database().ref(`Quiz Data/ ${id}`).set(obj)

            if (selectedOpt == correctAns){
                score++;
            }
        }
        getOPtions[i].checked = false
    }
    btn.disabled = true

    if (index > questions.length -1){
Swal.fire({
  title: "Good job!",
  text: ((score / questions.length)*100).toFixed(2),
  icon: "success"
});

var scoreObj = {
  quizScore: ((score / question.length) * 100).toFixed(2),
}
clearInterval(interval);
  firebase.database().ref('Result').push(scoreObj)
}

     else{
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
        min = 1;
        sec =30;

    }

}
function target(){
    btn.disabled = false
}
