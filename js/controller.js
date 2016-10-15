// // Starting template for a JS Module
var app = ( function () {

  return { 

  	// State modificaiton functions
		// create the random array of answers as options for the quiz taker
		createAnswerOptionsArray: function ( answersArr, count, statesArr ) {
			var currentAnswer = answersArr[count - 1];
			var answerHolderArr = [];
			var i = 0;
			while (i < 3) {
				var randomNum = Math.floor((Math.random() * 40) + 1);
				var randomState = answerHolderArr.indexOf(statesArr[randomNum]);
				if ( randomState === -1 ) {
					answerHolderArr.push(statesArr[randomNum]);
					i++;
				} else {
					continue;
				}
			}
			answerHolderArr.push(currentAnswer);
			answerHolderArr = app.shuffleArray(answerHolderArr);
			return answerHolderArr;
		},

		// shuffle function to shuffle the array once it's built
		shuffleArray: function (a) {
		    "use strict";
		    var i, t, j;
		    for (i = a.length - 1; i > 0; i -= 1) {
		        t = a[i];
		        j = Math.floor(Math.random() * (i + 1));
		        a[i] = a[j];
		        a[j] = t;
		    }
		    return a;
		},

		// function to update all the stats
		updateQuizStats: function ( count, answersArr, userChoice ) {
			if ( userChoice === answersArr[count -1]) {
				state.quiz.correctAnswers++;
				view.feedbackModal("Correct Answer", "Good job on choosing the right answer.", "Continue");
			} else {
				state.quiz.wrongAnswers++;
				view.feedbackModal("Wrong Answer", "Oops. The correct answer is actually " + answersArr[count -1], "Continue");
			}
		},

		// initial quiz app page show
		startQuiz: function (){
        	if(location.hash === "#questions") {
 				$('div#questions').toggleClass('display-page');
                app.updateQuizPage();
        	}
    	},

		// function updates the quiz page stats, questions and answers
		updateQuizPage: function () {
			var stats = $('div.row.header');
			var question = $('div.row.current-question');
			var answers = $('div.row.answer-options');
			view.renderQuizStats(state.quiz.currentCount, state.quiz.correctAnswers, state.quiz.wrongAnswers, stats);
			view.renderCurrentQuestion(state.quiz.questions, state.quiz.currentCount, question);
			view.renderAnswerOptions(state.quiz.answers, state.quiz.currentCount, state.quiz.states, answers);
		},

		// function resets the quiz upon a new round picked in the UI at the end of the quiz
		resetQuiz: function () {
			state.quiz.currentCount = 1;
			state.quiz.correctAnswers = 0; 
			state.quiz.wrongAnswers = 0; 
			app.startQuiz();
		},

		// function checks the end of the quiz and display the proper message
		endQuizCheck: function ( counter ) {
			if ( counter < 11 ) { 
				app.updateQuizPage();
			} else {
				$('div#questions').toggleClass('display-page');
				view.quizEndModal("Quiz Completed", "Thanks for taking the quiz. You got " + state.quiz.correctAnswers +
					" answers correct and " + state.quiz.wrongAnswers + " wrong.", "Retry Quiz" );
			}
		}

  };

})();