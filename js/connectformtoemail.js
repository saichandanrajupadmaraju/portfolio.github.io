function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var emailSubject = document.getElementById('emailsubject').value;
	var text = document.getElementById('text').value;


	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
	"<br/> Subject " + emailSubject +
	"<br/> Text " + text ;

	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "saichandan2023@gmail.com",
    Password : "0671AAF726963029FD3BBE9C7FE09FC43EB4",
    To : 'saichandan2022@gmail.com',
    From : "saichandan2023@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}