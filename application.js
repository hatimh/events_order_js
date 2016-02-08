$(document).ready(function(){
  
  $('#test').keydown(function(e) {
    $('#message').html('');
    $('#message').html('<p>keydown detected with key ' +e.which+ '</p>' );
    
  });

  $('#test').keypress(function(e) {
        
    $('#message').append('<p>keypress detected with key ' +e.which+ '</p>' );
    
  });

  //  $('#test').keyup(function(e) {
        
  //   $('#message').html('');
    
  // });

});

