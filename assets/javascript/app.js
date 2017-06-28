// When a user first comes to the page, they have not yet set their username.
var userSet = false;

// Prompts the user to set their username.
// Dynamically generated so that it can more easily be removed and readed to the page as necesary. 
function getUserName(){
	$('#account-display').empty();
	var instructions = $('<p>').text("Please pick a screen name to start playing.");
	var nameInput = $('<input>').attr("type", "text");
	nameInput.attr("id", "name-input");
	var submitButton = $('<button>').text("Set Name");
	submitButton.attr("id", "set-name-button");
	var errorDisplay = $('<p>').attr("id", "error-display");
	$('#account-display').append(instructions);
	$('#account-display').append(nameInput);
	$('#account-display').append(submitButton);
	$('#account-display').append(errorDisplay);
	$('#account-display').attr("class", "display-item");
};

function moveOffPage(){
//	$('#account-display').classList.add('horizTranslate');
	document.getElementById('account-display').classList.add('horizTranslate');
}