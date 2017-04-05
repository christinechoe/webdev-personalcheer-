var emotion_value = 0;
var emotion = document.forms[0];







function addValues(){
	var checkedValue;
	var answerElements = document.getElementsByClassName('option');
	console.log(answerElements);
	for(var i=0; i < answerElements.length; i ++){
		if (answerElements[i].checked){
			checkedValue += answerElements[i].value;
		}
	}
	emotion_value += checkedValue;
	console.log(emotion_value);
}

function submitHandler(event){
	event.preventDefault();
	console.log(emotion_value);
}