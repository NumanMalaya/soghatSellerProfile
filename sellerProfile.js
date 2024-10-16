$(document).ready(function () {
    $('.stars i').mouseenter(
        function () {
            var index = $(this).index(); 
            $(".stars i").removeClass('hovered'); 
            $(".stars i").each(function(i) {
                if (i <= index) {
                    $(this).addClass('hovered');
                }
            });  
        }
    );
    $(".stars").mouseleave(function() {
        $(".stars i").removeClass('hovered'); 
    });

    $('.stars i').click(
        function () {
            var index = $(this).index(); 
            $(".stars i").removeClass('selected'); 
            $(".stars i").each(function(i) {
                if (i <= index) {
                    $(this).addClass('selected');
                }
            });  
        }
    );

    $('.follow').click(
        function () {
            $(this).text($(this).text() === 'Follow' ? 'Following' : 'Follow').toggleClass('bg-warning text-light');
        }
    );
    
    $('.card').hover(
        function () {
            $(this).find('.product-action-1').removeClass('d-none');
        },
        function () {
            $(this).find('.product-action-1').addClass('d-none');
        }
    );
});