function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validate() {
    var $result = $('.error-msg');
    var email = $('.email-input').val();
    $result.text("");
  
    if (validateEmail(email)) {
        $(this).val('Submiting...'); //TODO: Disable the button

        setTimeout(function(){
            $('.email-input').hide('slow');
            $('.section').hide('slow');
            $('.submit').hide('slow');
            $('.subscribe-text').hide('slow');
            $('.return-msg-wrong').hide();
            $('.return-msg-ok').append('<h3>' + 'Thanks for subscribing' + '</h3>' + '<br>' + '<p>' + 'You ll start receiving free tips and resources soon.' + '</p>');
            $('.return-msg-ok').css({
                'color' : 'white',
                'margin' : '40px 0',
            });
        }
        , 2000);

    } else {
        $('.return-msg-wrong').text('Please enter a valid email address');
        $('.return-msg-wrong').css({
            'color' : '#C23628',
            'font-size' : '12px',
            'margin' : '10px 0 0 0',
        });
    }
    return false;
  }
  $('.submit').click(validate);