$(document).ready(function(){
	
	// WHEN DOCUMENT STARTS, HIDE JUMBOTRON3.
	

	// WHEN PLAYER HITS START BUTTON, MAKE SURE J3 IS REVEALED.

var timer = "00:00";
var number = 61;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered= 0;


// STEP 1: WHEN START IS PRESSED...
$('#start').on('click', function()

// RUN newScreen and RUN startTIMER
	{startTimer();});
	

// START TIMER
function startTimer(){
	counter = setInterval(decrement, 1000);

};

function decrement(){
	number--;

	if(number==60){newScreen();};

	$('#jumbotron1').html('<div class="timer text-center"><h2> Time Remaining: '+ number +' </h2></div>');

	if(number == 0)
	{clearInterval(counter); gameOver(); }

};


// WHEN START IS PRESSED
function newScreen(){
	
	$('#jumbotron0').hide();
	$('#jumbotron2').hide();
	$('#directions').hide();
	$('#jumbotron1').removeClass('hidden');
	$('#jumbotron3').removeClass('hidden');

	};

		
























		//THE GAME OVER FUNCTION: IF THE PLAYER'S ANSWER IS CORRECT, INCORRECT, OR THEY DIDN'T SELECT AN ANSWER, THEN DISPLAY THOSE ANSWERS ON THE NEXT PAGE.

	function gameOver(){

		if($('input[name=question1]:checked').val() == "1A" || $('input[name=question1]:checked').val() == "1B" || $('input[name=question1]:checked').val() == "1C")
			{correctAnswers = correctAnswers + 1}
		else if($('input[name=question1]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1} 
			
		if($('input[name=question2]:checked').val() == "2C"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question2]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
			
		if($('input[name=question3]:checked').val() == "3B"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question3]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
			
		if($('input[name=question4]:checked').val() == "4D"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question4]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
		
		$('#jumbotron3').addClass('hidden');
		$('#jumbotron4').removeClass('hidden');
		$('#jumbotron1').hide();
		$('#jumbotron5').removeClass('hidden');

		$('#jumbotron4').html('<div><h2>Game Over</h2></div><hr><h3> Correct: '+ correctAnswers +'<br> Incorrect: ' + incorrectAnswers + '<br> Unanswered: ' + unanswered + '</h3></div>');

		
	//console.log($('input[name=question1]:checked').val());
		
	// ALSO, NEED NEW SCREEN

	 // gets particular group of radio buttons
		
	// ALSO, NEED NEW SCREEN
	};


	// WHEN DONE IS PRESSED
	$('#done').on('click', function(){

		/* if(if all buttons are clicked,) {gameOver();}
		else {alert"You did not pick all the answers! Keep Going!"} */
		
		// Need an if/else statement here to check for selected radio buttons
		
		// RUN GAME OVER FUNCTION
		gameOver();
	
	});



	// ON radio click, alert value
	// $('input#inlineRadio4').on('change', function() {
	//     alert($(this).val()); // gets value of each selected radio button
	// });



















// END DOCUMENT READY
});