$(document).ready(function () {

var timeList = 700;
var TimeView = 5000;
var RadioBut = true;

var slideNum = 1;
var slideTime;
slideCount = $("#slider .slide").length;

var animSlide = function(arrow){
    clearTimeout(slideTime); 

    if(arrow == "next"){
	  if(slideNum == slideCount) { slideNum=1; }
	  else{slideNum++}
       translateWidth = -$('#active-slide').width() * (slideNum - 1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if(arrow == "prew")
    {	
       if(slideNum == 1) { slideNum=slideCount; }
	  else{slideNum-=1}
	  translateWidth = -$('#active-slide').width() * (slideNum - 1); 
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }else{
       slideNum = arrow;
	  translateWidth = -$('#active-slide').width() * (slideNum -1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }

    $(".ctrl-select.active").removeClass("active");
    $('.ctrl-select').eq(slideNum - 1).addClass('active');
}

    if(RadioBut){
    var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
        .prependTo('#active-slide');
        $('#nextbutton').click(function(){
           animSlide("next");
           return false;
           })
        $('#prewbutton').click(function(){
           animSlide("prew");
           return false;
           })
    }
        var adderSpan = '';
        $('.slide').each(function(index) {
               adderSpan += '<span class = "ctrl-select">' + index + '</span>';
           });
        $('<div class ="Radio-But">' + adderSpan +'</div>').appendTo('#slider-wrap');
        $(".ctrl-select:first").addClass("active");
        $('.ctrl-select').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum + 1);
        });
        var pause = false;
        var rotator = function(){
               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
               }
        $('#slider-wrap').hover(
           function(){clearTimeout(slideTime); pause = true;},
           function(){pause = false; rotator();
           });
        
    var clicking = false;
    var prevX;
    $('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function() {
     clicking = false;
    });

    $(document).mouseup(function(){
        clicking = false;
    });

    $('.slide').mousemove(function(e){
        if(clicking == true)
         {
             if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
             if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
           clicking = false;
        }
    });
    $('.slide').hover().css('cursor', 'pointer');
    rotator();  

});