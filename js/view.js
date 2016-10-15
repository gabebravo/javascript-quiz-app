// Starting template for a JS Module
var view = (function () {

  return {

  	// render the quiz stats 
		renderQuizStats: function ( count, rightAnswers, wrongAnswers, element ) {
				var headerHTML = '';
					headerHTML += '<div class="col-xs-5 stats question-num">' + 
						'<span class="question-count-js">' + count + ' out of 10</span></div>';
					headerHTML += '<div class="col-xs-7 stats correct-wrong">' + 
						'<span class="answer-stats-js">' + rightAnswers + ' right, ' + wrongAnswers + ' wrong</span></div>';
				element.html(headerHTML);
		},

		// render the current quiz question
		renderCurrentQuestion: function ( questionsArr, count, element ) {
			var index = count - 1;
			var questionHTML = '';
				questionHTML += '<div class="col-xs-12 stats question-num">';
				questionHTML += '<span class="current-question-js">' + questionsArr[index] + '</span>';
				questionHTML += '</div>';
			element.html(questionHTML)
		},

		// render the current answer options
		renderAnswerOptions: function ( answersArr, count, statesArr, element ) {
			var answersArray = app.createAnswerOptionsArray(answersArr, count, statesArr);

			var answersHTML = answersArray.map( function( item ) {
				var html = '';
					html += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center answer-button">';
					html += '<button class="btn btn-large btn-primary" type="button">';
					html += '<span class="state-chosen">' + item + '</span>';
					html += '</button></div>';

				return html;

			});
			element.html(answersHTML);
		}, 

	// MODALS THAT ARE PART OF THE VIEW 
		// modal to display the alerts to the user after every question
		feedbackModal: function (title, bodyText, btnText ) {
			var modalHtml = '';
			modalHtml += '<div class="modal modal--active">';
			modalHtml += '<div class="modal__content">';
			modalHtml += '<a href="#" class="modal__close--js">';
			modalHtml += '<i class="icon icon-cross"></i></a>';
			modalHtml += '<h3 class="modal__title">'+title+'</h3>';
			modalHtml += '<p class="modal__text">'+bodyText+'</p>';
			modalHtml += '<button class="close-modal btn btn-primary">'+btnText+'</div></div></div>';
			modalHtml += '<div class="modal__overlay"></div>';
			$('div.modal-pop').append(modalHtml);

			$('.close-modal').on('click', function( ){
				state.quiz.currentCount++;
				$('.modal').remove();
		    	$('.modal__overlay').remove();
		  		app.endQuizCheck( state.quiz.currentCount );
			});
		}, 

		// modal to display the final alerts to the user after the quiz
		quizEndModal: function (title, bodyText, btnText ) {
			var modalHtml = '';
			modalHtml += '<div class="modal modal--active">';
			modalHtml += '<div class="modal__content">';
			modalHtml += '<a href="#" class="modal__close--js">';
			modalHtml += '<i class="icon icon-cross"></i></a>';
			modalHtml += '<h3 class="modal__title">'+title+'</h3>';
			modalHtml += '<p class="modal__text">'+bodyText+'</p>';
			modalHtml += '<button class="close-modal btn btn-primary">'+btnText+'</div></div></div>';
			modalHtml += '<div class="modal__overlay"></div>';
			$('div.modal-pop').append(modalHtml);

			$('.close-modal').on('click', function( ){
				app.resetQuiz();
				$('.modal').remove();
		    	$('.modal__overlay').remove();
			});
		}

  };

})();