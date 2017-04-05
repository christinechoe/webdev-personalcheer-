var emotion_value = 0;

//var emotion = document.forms[0];


var submitButton = document.getElementById("submit_button");

function getValues(){
	console.log('getValues executed');
	var checkedValue;
	var answerElements = document.getElementsByClassName('option');
	for(var i=0; i < answerElements.length; i ++){
		if (answerElements[i].checked){
			checkedValue += answerElements[i].value;
		}
	}
	console.log(checkedValue);
	console.log(answerElements);
	emotion_value += checkedValue;
}

//submitButton.addEventListener('click', getValues());

/*
function addValues(){
	var checkedValue;
	//var answerElements = document.getElementsByClassName('option');
	//console.log(answerElements);
	for(var i=0; i < answerElements.length; i ++){
		if (answerElements[i].checked){
			checkedValue += answerElements[i].value;
		}
	}
	emotion_value += checkedValue;
	console.log(emotion_value);
}
*/


/*function submitHandler(event){
	event.preventDefault();
	console.log(emotion_value);
}*/
