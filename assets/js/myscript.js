$('#loginbtn').on('click',function(){
    var data = $('#loginForm').serializeArray();
    password = data[1]['value']
    username = data[0]['value']
    if(password == "admin")
    {
    	$('#user').text("Hello "+username)
    	window.location.replace("#home");
    }else
    {
		$('#passerror').text("Wrong Password").fadeIn().delay(2000).fadeOut()
    }
    
});