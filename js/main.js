$(document).ready(function() {

    if ($(window).width() < 768) {
        $('body ').addClass('open__side')
    }

    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });

    $(document).on('click', '.select__main .top', function(){
        $(this).parent().toggleClass('opened')
    })

 
});
    $(document).on('click', 'body', function(e){
        if (!$(e.target).is('.select__main .top *, .select__main .top')) {
            $('.select__main').removeClass('opened')
        }
    })