

//tab 

function openTabs(tabsName) {
    var i;
    var x = document.getElementsByClassName("step-tab");

    // $('.tab-primary').on('click', function(){
    //     $('.tab-primary').removeClass('active');
    //     $(this).addClass('active');
    // });
    // const myButton = document.getElementById('myButton');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    // myButton.addEventListener('click', function() {
    //     myButton.classList.add('bg-primary', 'active:bg-primary');
    //   });

   

    document.getElementById(tabsName).style.display = "block";

    // $('.step-tab').removeClass('primary');
    // $(this).addClass('primary');
    
  }

//btn tab  active
 $(document).ready(function(){
    $('.tab-primary').on('click', function(){
        $('.tab-primary').removeClass('active');
        $(this).addClass('active');
    })
});


//sticky menu

$(window).bind('scroll',function(e) {
    e.preventDefault()
      if ($(this).scrollTop() > 50) {
          $('.topmenu').addClass('fixed');
      }else{
          $('.topmenu').removeClass('fixed');
      }   
  });


  //isotope JS
 

    // init Isotope
    var $grid = $('.portfolio').isotope({
        // options
        itemSelector: '.portfolio-grid',
        // layoutMode: 'fitRows',
        // percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.portfolio-grid',
        //   columnWidth: 100,
            gutter: 70
          
          
        }
    });

    // filter items on button click
    $('.portfolio-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // active button Selection
    $('.portfolio-filter button').click(function(){
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
    });


    //progress bar
    document.addEventListener("DOMContentLoaded", function(){
        let bar = document.getElementById('bar');
        bar.classList.remove('w-0');
        bar.classList.add('w-full');
    });



var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
     navigation: {
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              preventClicks :true,
            },
  });

  //counter

  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 834, 2000);
    counter("count2", 100, 372, 2500);
    counter("count3", 100, 14, 2500);
    counter("count4", 0, 43, 3000);
   });
   
