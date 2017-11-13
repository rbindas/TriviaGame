$(document).ready(function() {
  var slides = [
    {
      text: "This is a fairly simple survey with a sample of questions asking for your opinion on different topics. Each answer is related to a certain topic (dimension) and the final scores are applied to the individual section accordingly.",
      radios: false,
      button: true,
      buttonText: "Start survey",
      result: false,
      intro: true,
      color: "green"
    },
    {
      text: "How would you rate the room service?",
      radios: true,
      dimension: 1,
      dimensionName: "Customer service",
      button: false,
      result: false,
      intro: false,
      color: "green"
    },
    {
      text: "How would you rate the restaurant service?",
      radios: true,
      dimension: 1,
      dimensionName: "Customer service",
      button: false,
      result: false,
      intro: false,
      color: "green"
    },
    {
      text: "How would you rate the housekeeping?",
      radios: true,
      dimension: 1,
      dimensionName: "Customer service",
      button: false,
      result: false,
      intro: false,
      color: "green"
    },
    {
      text: "How would you rate the hotel experience?",
      radios: true,
      dimension: 2,
      dimensionName: "Customer experience",
      button: false,
      result: false,
      intro: false,
      color: "orange"
    },
        {
      text: "How would you rate the park experience?",
      radios: true,
      dimension: 2,
      dimensionName: "Customer experience",
      button: false,
      result: false,
      intro: false,
      color: "orange"
    },
        {
      text: "How would you rate the food quality in the park?",
      radios: true,
      dimension: 3,
      dimensionName: "Food quality",
      button: false,
      result: false,
      intro: false,
      color: "lightblue"
    },
        {
      text: "How would you rate the food quality in the cafe?",
      radios: true,
      dimension: 3,
      dimensionName: "Food quality",
      button: false,
      result: false,
      intro: false,
      color: "lightblue"
    },
    {
      text: "This is the place to show the results of the quick survey.<br/>Scores are divided into dimensions accordingly.",
      radios: false,
      button: false,
      result: true,
      intro: false,
      color: "green"
    }
  ];

  var countSlides;
  countSlides = slides.length;

  function createSlides() {
    // I wanna take the slider ID in as argument in order to make it more versatile. Dont know if it could work
    var wrapper = $("#feedbackTest");
    var questionNumber = 1;
    var questionsTotal = 0;
    var output;

    for(var i = 0; i < countSlides; i++) {
      if (slides[i].radios === true) {
        questionsTotal += 1;
      }
    }

    output = "<div class='carousel-inner'>";
    // Loop through all elements and insert html block of radio buttons
    for(var i = 0; i < countSlides; i++) {
      if (i === 0) {
        output += "<div class='item active'>";
      } else {
        output += "<div class='item'>";
      }
      output += "<div class='section " + slides[i].color + "'>";
      output += "<div class='section-header'>";
      output += "<h2>This is the header</h2>";
      output += "</div>"; // .section-header
      output += "<div class='question'>";
      output += "<div class='question-number clearfix'>";
      
      if (slides[i].intro === true) {
        output += "<p>Introduction</p>";
        output += "<hr>";
      } else if (slides[i].radios === true) {
        output += "<p>Question " + questionNumber + " of " + questionsTotal + "</p>";
        output += "<hr>";
        questionNumber += 1;
      } else if (slides[i].result === true) {
        output += "<p>Result</p>";
        output += "<hr>";
      }
      output += "</div>";
        output += "<p>" + slides[i].text; + "</p>";
      if (slides[i].radios === true) {
        output += "<div class='radio-button-group'>";
        output += "<label class='radio'>";
        output += "<input id='radios" + i + "' name='radios" + i + "' type='radio' value='1' data-dimension-name='" + slides[i].dimensionName + "' data-dimension='" + slides[i].dimension + "'> Very dissatisfied";
        output += "</label>";
        output += "<label class='radio'>";
        output += "<input id='radios" + i + "' name='radios" + i + "' type='radio' value='2' data-dimension-name='" + slides[i].dimensionName + "' data-dimension='" + slides[i].dimension + "'> Dissatisfied";
        output += "</label>";
        output += "<label class='radio'>";
        output += "<input id='radios" + i + "' name='radios" + i + "' type='radio' value='3' data-dimension-name='" + slides[i].dimensionName + "' data-dimension='" + slides[i].dimension + "'> Neither satisfied nor dissatisfied";
        output += "</label>";
        output += "<label class='radio'>";
        output += "<input id='radios" + i + "' name='radios" + i + "' type='radio' value='4' data-dimension-name='" + slides[i].dimensionName + "' data-dimension='" + slides[i].dimension + "'> Satisfied";
        output += "</label>";
        output += "<label class='radio'>";
        output += "<input id='radios" + i + "' name='radios" + i + "' type='radio' value='5' data-dimension-name='" + slides[i].dimensionName + "' data-dimension='" + slides[i].dimension + "'> Very satisfied";
        output += "</label>";
        output += "<div class='test-submit clearfix'>";
        output += "<a data-slide='prev' href='#feedbackTest'>&lt; Previous question</a>";
        output += "</div>"; // .test-submit
        output += "</div>"; // .radio-button-group
      }
      if (slides[i].result === true) {
        output += "<div class='results'></div>";
      }
      if (slides[i].button === true) {
        output += "<div class='clearfix'><button href='#feedbackTest' class='btn center-block' data-slide='next'>" + slides[i].buttonText + "</button></div>";
      }
      output += "</div>";
      output += "</div>";
      output += "</div>"; // .section
    }
    output += "</div>"; // .carousel-inner
    $(wrapper).append(output);
  }

  createSlides();

  function showScore() {
    var values;
    var dimension;
    var dimensionName;
    var counter = 1;
    var scores = {};
    var names = {};
    var dimensionCounter = {}
    var output = "";
    values = $("input:radio:checked");

    for (var i = 0; i < values.length; i++)
    {
      dimension = $(values[i]).data("dimension-name");
      if(typeof scores[dimension] == "undefined") {
        scores[dimension] = parseInt($(values[i]).val());
        names[dimension] = 1;
      } else {
        scores[dimension] += parseInt($(values[i]).val());
        names[dimension] += 1;
      }
    }

    for(dimension in scores) {
      var highestScore = names[dimension] * 5;
      var scorePercent = scores[dimension] * 100 / highestScore;
      output += "<div>Dimension " + counter + ": " + dimension + "</div>";
      output += "<div class='progress'><div aria-valuemax='100' aria-valuemin='0' aria-valuenow='" + scorePercent + "' class='progress-bar' role='progressbar' style='width:" + scorePercent + "%;'></div></div>";
      counter += 1;
    }
    $(".results").html(output);
  }

  // Toggles the animated background color fill on the label for each radio button
  // And fires the next slide in the carousel
  $("input").click(function() {
    $("input:not(:checked)").parent().removeClass("checked");
    $("input:checked").parent().addClass("checked");
    $(".carousel").delay(600).queue(function() {
      $(this).carousel("next");
      $(this).dequeue();
    });
    showScore();
  });
});