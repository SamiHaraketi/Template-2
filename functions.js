/*map funtion*/
 function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


/*mooth scroll*/
$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

        });
      }
    }
  });


  /*menu*/ 
var modal1 = document.getElementById('box1');
var modal2 = document.getElementById('box2');
var modal3 = document.getElementById('box3');
var modal4 = document.getElementById('box4');
var modal5 = document.getElementById('box5');
var modal6 = document.getElementById('box6');
var modal7 = document.getElementById('box7');
var modal8 = document.getElementById('box8');


var btn1 = document.getElementById("img1");
var btn2 = document.getElementById("img2");
var btn3 = document.getElementById("img3");
var btn4 = document.getElementById("img4");
var btn5 = document.getElementById("img5");
var btn6 = document.getElementById("img6");
var btn7 = document.getElementById("img7");
var btn8 = document.getElementById("img8");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");
var close7 = document.getElementById("close7");
var close8 = document.getElementById("close8");



btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

btn5.onclick = function() {
    modal5.style.display = "block";
}

btn6.onclick = function() {
    modal6.style.display = "block";
}

btn7.onclick = function() {
    modal7.style.display = "block";
}

btn8.onclick = function() {
    modal8.style.display = "block";
}



close1.onclick = function() {
    modal1.style.display = "none";
}

close2.onclick = function() {
    modal2.style.display = "none";
}

close3.onclick = function() {
    modal3.style.display = "none";
}
close4.onclick = function() {
    modal4.style.display = "none";
}
close5.onclick = function() {
    modal5.style.display = "none";
}
close6.onclick = function() {
    modal6.style.display = "none";
}
close7.onclick = function() {
    modal7.style.display = "none";
}
close8.onclick = function() {
    modal8.style.display = "none";
}


/*animation*/
/*number*/
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
/*menu-color*/
$(document).ready(function(){       
var scroll_start = 0,

    startchange = $(".about") ,
    startchange2 = $(".portfolio") ,

    offset = startchange.offset() ;
    offset2 = startchange2.offset() ;

 if (startchange.length){
 $(document).scroll(function() { 
  scroll_start = $(this).scrollTop();
  if(scroll_start > offset.top )
   {
     $(".i-do-bar1").addClass("animation-bar1");
     $(".i-do-bar2").addClass("animation-bar2");
     $(".i-do-bar3").addClass("animation-bar3"); 

     $(".count-text").addClass("count");      

   }


});
}


 if (startchange2.length){
 $(document).scroll(function() { 
  scroll_start = $(this).scrollTop();
  if(scroll_start > offset2.top-700 ) 
  {   
     $(".img-work").addClass("animation-img");
   }


});
}




});