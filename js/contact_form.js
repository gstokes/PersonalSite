$(document).ready(function(){
    $("#submit_btn").click(function() { 
        //collect input field values
        var user_name       = $('input[name=name]').val();  //user name
        var user_email      = $('input[name=email]').val(); //user email
        var user_phone      = $('input[name=phone]').val(); //user phone
        var user_message    = $('textarea[name=message]').val(); //message text
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=name]').css('border-color','red'); 
            proceed = false;
             $("#result").hide().html("You Forgot something").slideDown().removeClass('alert-box success radius').addClass('alert-box alert round');
        }
        if(user_email==""){ 
            $('input[name=email]').css('border-color','red'); 
            proceed = false;
             $("#result").hide().html("You Forgot something").slideDown().removeClass('alert-box success radius').addClass('alert-box alert round');
        }
        if(user_phone=="") {    
            $('input[name=phone]').css('border-color','red'); 
            proceed = false;
             $("#result").hide().html("You Forgot something").slideDown().removeClass('alert-box success radius').addClass('alert-box alert round');
        }
        if(user_message=="") {  
            $('textarea[name=message]').css('border-color','red'); 
            proceed = false;
             $("#result").hide().html("You Forgot something").slideDown().removeClass('alert-box success radius').addClass('alert-box alert round');
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){  
                
                //load json data from server and output message     
                if(response.type == 'error')
                {
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                
                    output = '<div class="success">'+response.text+'</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val(''); 
                    $('#contact_form textarea').val(''); 
                }
                
                $("#result").hide().html(output).slideDown().removeClass('alert-box alert round').addClass('alert-box success radius');
            }, 'json');
            
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
        $("#result").slideUp();
    });

});

