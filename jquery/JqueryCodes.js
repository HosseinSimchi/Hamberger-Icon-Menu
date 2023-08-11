$('document').ready(function() {
    $('.fontAwesome').click(function(){   
        let responsiveMenu =  $("nav");
        responsiveMenu.animate({ left : '0' });
        $('body').append('<div class="blackBackground"></div>');
        $('.blackBackground').click(function(){
            responsiveMenu.animate({left : '-220px' });
            $(this).remove();
        });
    });

});