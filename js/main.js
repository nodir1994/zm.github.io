$(document).ready(function() {

    if ($(window).width() < 1023) {
        $('.sidebar').append($('header ul'), $('.hdr__main .lang'))

        $(document).on('click', '.hamburger', function(e){
            $('body').addClass('opened')
        })


        $(document).on('click', 'body', function(e){
            if (!$(e.target).is('.hamburger *, .hamburger, .sidebar, .sidebar *')) {
                $('body').removeClass('opened')
            }
        })

    }

    // $('marquee').mouseover(function() {
    //     $(this).attr('scrollamount',0);
    // }).mouseout(function() {
    //      $(this).attr('scrollamount',5);
    // });

    // $(document).on('click', '.select__main .top', function(){
    //     $(this).parent().toggleClass('opened')
    // })

 
});
    