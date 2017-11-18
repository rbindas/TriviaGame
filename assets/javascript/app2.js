var questions = [{
        question: "What is the capital of Ohio?",
        answers: ["Cleveland", "Columbus", "Dayton", "Toledo"],
        corrAnswr: "Columbus"
    }, {
        question: "What is the capital of Washington?",
        answers: ["Seatle", "Redmond", "Olympia", "Bellevue"],
        corrAnswr: "Olympia"
    },
    {
        question: "What is the capital of Florida?",
        answers: ["Miami", "Tampa", "Tallahassee", "Disneyland"],
        corrAnswr: "Tallahassee"
    }
];


var score = 0;
var number = 120;
var interval;
var gameEnds;
var questionsAnsweredCorr;
var questionsAnsweredIncorr;
var start;
var currentQuestion;

//click start to begin game
//timer starts when game starts
//game ends when time = 0 games 
//Done button is selected
//one answer per question


//!!!!!!!!!!!!!!!!!!!!!FUNCTIONS!!!!!!!!!!


function populateQuestions() {
    // $("#MainArea").append("<h2>" + questions.question + "<h2>")


    for (var i = 0; i < questions.length; i++) {
        $("#MainArea").append("<h4>" + questions[i].question + "<h4>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#MainArea").append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    };

    console.log("function: populateQuestions works");

};

function startTimer() {
    $("#counter").show();
    $("#StartBtn").hide();

    start = setInterval(function() {
        number--;
        $("#counter").html("<h5> Time Remaining: " + number + "</h5");
        console.log(number);
        if (number <= 0) {
            console.log("Times up!");
            clearInterval(start);
        }

    }, 1000);

    console.log("function: startTimer works");
};

// function stopTimer(){
//   $("#DoneBtn").on("click", stop);
//   clearInterval(start);
//   console.log("function: stopTimer works");
// };

function gameReset() {
    console.log("function: gameReset works");

};

function calculateResults() {
    // var userInput = 
    for(var k = 0; k < questions.length; k++){
        if(questions.answers == questions.corrAnswr) {
            questionsAnsweredCorr++;
        } else {
            questionsAnsweredIncorr++;
        }
    }    

    console.log("questionsAnsweredCorr" + questionsAnsweredCorr);
    console.log("questionsAnsweredIncorr" + questionsAnsweredIncorr);
    console.log("function: calculateResults works");

};

function presentResults() {
    console.log("function: presentResults works");

};

function stop() {
    clearInterval(start);
};

//!!!!!!!!!!!!!!!!!!CLICK EVENTS!!!!!!!!!!!!!!!!!!



$(document).ready(function() {
    $("#counter").hide();
    $(".results").hide();
    $("#DoneBtn").hide();


    //   StartBtn
    $("#StartBtn").click(function() {
        populateQuestions();
        startTimer();
        $("#DoneBtn").show();
        console.log("click event: StartBtn fired")

    });

    // DoneBtn
    $("#DoneBtn").on("click", function() {
        stop();
        calculateResults();
        presentResults();
        console.log("click event: DoneBtn fired")

    });

});




//                          SCRATCH WORK