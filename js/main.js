$(document).ready(function(){

    $('#text').html("Click here");
    $('.custom').val("Nick");

    $('#btn').on('click', function(){
        alert("YAY");
    });

    $('#btn').hover(function(){
        console.log("Touch");
    });

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.sub-menu');
        submenu.fadeIn(300);

        $('.prop').on('mouseleave',function(){
            submenu.fadeOut(300);
        })
    });

    $('#append, #prepend, #replace').on('click', function(e){
        
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.edit').val();
        console.log(action, content);

        if(action=="append"){
            $('#my-text').append(content);
        }
        else if(action=="prepend"){
            $('#my-text').prepend(content);
        }
        else{
            $('#my-text').html(content);
        }

        $('.edit').val('');
    });

    $('[href="https://google.in"]').on('click',function(event){
        event.preventDefault();
        console.log("Google");
    });

    $(document).on('contextmenu', function(){
        return false;
    })

    $(document).on('mousedown', function(event){
        if(event.which==3)
        event.preventDefault();

        switch(event.which){
            case 1:
                console.log("Left button");
                break;
            case 2:
                console.log("Middle button");
                break;
            case 3:
                console.log("Right button");
                break;
        }

        if(event.which==3){

            $('.hidden').removeClass('shown');

            if($(event.target).is('div.imag')){
                $('.newtab, .image').addClass('shown');
            }else if($(event.target).is('a')){
                $('.newtab').addClass('shown');
            }

            console.log(event);


            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn();
        }
        if(event.which!=3){
            $('#context').fadeOut();
        }

    });

    $('.mail').focusout(function(){
        if($(this).val().indexOf('@')>-1 && $(this).val().indexOf('.')>-1){
            $('#validity').html('VALID');
        }
        else{
            $('#validity').html('INVALID');
        }
    });
});
