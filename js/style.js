 //price change and color picker
 $(document).ready(function(){
  $(".table-click0").click(function(){      
    $(".table-price0").show();
    $(".table-show1, .table-show2, .table-price1, .table-price2").hide();
  });
  $(".table-click1").click(function(){
    $(".table-show1, .table-price1").show();
    $(".table-show2, .table-price0, .table-price2").hide();
  });
  $(".table-click2").click(function(){
    $(".table-show1, .table-show2, .table-price2").show();      
    $(".table-price0, .table-price1").hide();
  });
  $(".table-click10").click(function(){      
    $(".table-price10").show();
    $(".table-show11, .table-show12, .table-price11, .table-price12").hide();
  });
  $(".table-click11").click(function(){
    $(".table-show11, .table-price11").show();
    $(".table-show12, .table-price10, .table-price12").hide();
  });
  $(".table-click12").click(function(){
    $(".table-show11, .table-show12, .table-price12").show();      
    $(".table-price10, .table-price11").hide();
  });
});

//background select first

(function togCell(){
$(".background-change>td").click(function(e){
  $('.background-change>td').removeClass('background-selected');
  $(this).addClass('background-selected');    
});  
})();

//background select second

(function togCell(){
  $('.background-change1>td').click(function(e){
    $('.background-change1>td').removeClass('background-selected');
    $(this).addClass('background-selected');    
  });  
  })();

//background selected on first td with price

$(document).ready(function(){
  $(".table-click0").addClass('background-selected');
  $(".table-click10").addClass('background-selected');
});

 //dropdown expand

$(document).ready(function(){
  $(".drop1").click(function(){
    $(".show1").toggle();
  });
  $(".drop2").click(function(){
    $(".show2").toggle();
  });
  $(".drop3").click(function(){
    $(".show3").toggle();
  });
  $(".drop4").click(function(){
    $(".show4").toggle();
  });
});

//SLIDER

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//sticky btn

 $(document).ready(function(){
    $(".sticky-btn").click(function(){      
      $(".sticky-expand").show();
    });
    $(".close").click(function(){ 
      $(".sticky-expand").hide();
    });
  });  

  document.addEventListener('click', function (event) {   
    if (event.target.closest('#stickyTest') || event.target.closest(".sticky-btn")) return;
    $(".sticky-expand").hide();   
   }, false);


