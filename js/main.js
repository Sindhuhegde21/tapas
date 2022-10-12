function sendContact() {
    var valid;  
    valid = validateContact();
    
    if(valid) {
        $('#mail-status').html('<div class="text-center pt-3"><div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div></div>');
        jQuery.ajax({
        url: "mail.php",
        type: "POST",
        data:'name='+$("#name").val()+'&message='+$("#message").val()+'&phone='+$("#phone").val(),
        
        success:function(data){
        $("#mail-status").html(data);
        dataclear();

        },
        error:function (data){
        $("#mail-status").html(data);
        }
        });
    }
}

function dataclear(){
    $("#name").val('');
    $("#message").val('');
    $("#phone").val('');
}

function validateContact() {
    var valid = true;   
    //alert("HI");
        
    $("#name-info").html("");
    $("#name").css('border-color','#5cb85c');

    $("#message-info").html("");
    $("#message").css('border-color','#5cb85c');

    $("#phone-info").html("");
    $("#phone").css('border-color','#5cb85c');
    
    if(!$("#name").val()) {
        $("#name-info").html("Enter Your Name");
        $("#name").css('border-color','#dc3545');
        $("#mail-status").html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }
    if(!$("#message").val()) {
        $("#message-info").html("Message required");
        $("#message").css('border-color','#dc3545');
        $("#mail-status").html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }
    
    if(!$("#phone").val()) {
        $("#phone-info").html("Provide Contact No.");
        $("#phone").css('border-color','#dc3545');
        $('#mail-status').html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }

    if(!$("#phone").val().match(/^[0-9]{10}$/)) {
        $("#phone-info").html("Provide valid contact No.");
        $("#phone").css('border-color','#dc3545');
        $('#mail-status').html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }
    
    return valid;
    
}