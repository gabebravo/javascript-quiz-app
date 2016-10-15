
// Starting template for a JS Module
var state = (function () {
 
	var quiz, questions, answers, states, currentCount, correctAnswers;

  return {
 
 	// single state object
	quiz: {
		questions: [
			"Mount McKinley is the highest mountain peak in the North American continent. In which US state is the peak located?",
			"Which is the largest of the 50 states that make up the United States of America?",
			"Of which American state is the ‘Bear Flag’ the official flag?",
			"In which U.S. state is the Yellowstone National Park located (the largest and the main portions of the park)?",
			"Name the only state that shares its border with only one other state.",
			"Of which American state is Niagara Falls located within?",
			"Dodge City is one of the windiest cities in the US, and popular in American culture as a wild frontier town of the Old West. In which state is it located?",
			"Complete the name of this Hollywood romantic comedy by filling in the blank with the name of an American state: Sweet Home _______ .",
			"Of which American state is Saint Paul the capital?",
			"Which state was the 50th state to join the United States of America?",
		],
		answers: [
			"Alaska",
			"Alaska",
			"California",
			"Wyoming",
			"Maine",
			"New York",
			"Kansas",
			"Alabama",
			"Minnesota",
			"Hawaii"
		], 
		states: [
			"Arizona", "Arkansas", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", 
			"Iowa", "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan", "Mississippi", "Missouri", "Montana", 
			"Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "North Dakota", 
			"Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", 
			"Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin" 
		],
		currentCount: 1,
		correctAnswers: 0,
		wrongAnswers: 0
	}
  };
})();


