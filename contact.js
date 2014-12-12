$(function() {

    var text_max = 150;
    $('#textarea_feedback').html(text_max + ' ' + ' characters remaining');

    $('#message').keyup(function() {
        var text_length = $('#message').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' ' + 'characters remaining');
        if (text_remaining < 20){
          $('#textarea_feedback').css('color', '#F2D011');
        }

        if (text_remaining == 0){
          $('#textarea_feedback').css('color', 'red');
        }
    });

    //$('#submit').on('click', function () {


     //$('.flip-container').classList.toggle("flip");
   //});



$('.submit').on('click',function() {
    clearValidation();
    validateFields();
});
function clearValidation(){
    $('.form-error').remove();
}

function validateFields() {
    var inputs = $('.will-validate'),
        errors = [];

    for (var i=0; i<inputs.length; i++) {
        var input = inputs[i],
            error = '',
            validationType = $(input).data('validate');
        var inputValue = $(input).val();
        if(validationType == 'not-blank' && inputValue == ''){
            error = $(input).data('error-message');
        }else if(validationType == 'email') {
            var  validEmail = validateEmail(inputValue);
            if (!validEmail) {
            error = $(input).data('error-message');
            }
        }
        errors.push(error);

    }


console.log(errors);
    for (var e=0;e<errors.length; e++){
        $('.form-errors').append('<li class="form-error">'+errors[e]+'</li>');
    }
    if (errors.length > 0){
      var name= $('#name').val();
      var email= $('#email').val();
     $('.back').append('Hi' + ' ' + name + '!' + 'Thank you for contacting us. We will review your message and contact you at' + ' ' + email);

        $('.flip-container').addClass('flip-go');
        setTimeout(function (){
          $('.flip-container').removeClass('flip-go');
        }, 3000);
        

    }

}
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

});
