
  $(document).ready(function() {  
          //add your other targets here
       $("#myCarousel, #myCarousel_test").swiperight(function() {  
          $(this).carousel('prev');  
          });  
		//add your other targets here
       $("#myCarousel, #myCarousel_test").swipeleft(function() {  
          $(this).carousel('next');  
     });  
  });  
