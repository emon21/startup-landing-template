

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
