function isValid(event) { 
if($('#email').val() === "test" && $('#pass').val() ==="test") {
	window.location = "final.html";
	return true;
} 
else {
	$('span').text("Incorrect Username or Password").show();
	return false;
}
}
