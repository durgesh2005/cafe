$('.drink').hide();
$('.food').show();
$('#eat').click(function(){
   $('.drink').hide();
   $('.food').show();  
   $('#eat').css({
    "background-color": "rgb(86, 82, 82)",
    "color": "white"
});
$('#drink').css({"background-color": "white",
                'color': 'black'});
});

$('#drink').click(function(){
    $('.drink').show();
    $('.food').hide(); 
    $('#drink').css({
        "background-color": "rgb(86, 82, 82)",
        "color": "white"
    });
    $('#eat').css({"background-color": "white",
                    'color': 'black'}) 
});

