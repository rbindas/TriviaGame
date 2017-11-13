var score =0;
var currentQuestion = 0;
var questionEl = document.getElementById("questions");
var totalQuestions = questions.length;
var resultcont = document.getElementById("results");


var questions = [{
      question: "What is the capital of Ohio?",
      answrs: ["Cleveland", "Columbus", "Dayton", "Toledo"],
      corrAnswr: "Columbus"
    }, {
      question: "What is the capital of Washington?",
      answrs: ["Seatle", "Redmond", "Olympia", "Bellevue"],
      corrAnswr: "Olympia"
    },
    {
      question: "What is the capital of Florida?",
      answrs: ["Miami", "Tampa", "Tallahassee", "Disneyland"],
      corrAnswr: "Tallahassee"
    }];

    
    // function gameReset(){
    // 	score = 0;
    // }:


    function loadQuestion() {
    	$(".quest").append("<h2>" + questions[currentQuestion].questionEl +"</h2>");
    		// for(var i=0, i<questions[currentQuestion])

    };