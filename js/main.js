/**
 * Created by gabriel bravo on 10/15/16.
 */

$(document).ready( function() {

	app.startQuiz();

	// bind answers button event and get the answer data
	$('.row.answer-options').on('click', 'div', function() {
		chosenState = $(this).find('span.state-chosen').text();
		app.updateQuizStats( state.quiz.currentCount, state.quiz.answers, chosenState );
	});

});


