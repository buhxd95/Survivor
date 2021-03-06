var jogar = $('#jogar');

$(document).on("keydown", function(evento){
    if(evento.keyCode == 13 && !$('#canvas').length)
        jogar.click();
});

jogar.on("click", function(){
    var canv = $('<canvas id="canvas"></canvas>').css("border","1px solid black");
    $("body").css("margin","1px").children().hide(800);
    $("body").append(canv);
    canv[0].width = 50;
    canv[0].height = 50;
    var mw = window.innerWidth - 4;
    var mh = window.innerHeight - 4;
    var parar = false;

    var criar = setInterval(function(){
        if(canv[0].width < mw)
            canv[0].width += mw/mh+1;
        else
            parar = true;
        if(canv[0].height < mh)
            canv[0].height += 1;
        else if(parar){
            init();
            $("body").css("background-color","black");
            clearInterval(criar);
        }
    },1);
    return false;
});