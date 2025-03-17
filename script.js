$(document).ready(function(){
    $("#myform").validate({
        rules:{
            email:{
                required:true,
                email: true
            }
        },

        messages:{

            email: {
                required:"please Enter your email here",
                email:"please enter a valid email id"
            }
        },

        submitHandler: function(form){
            alert("Thank You For Subscribe");
            form.submit();
        }

        
    })
})