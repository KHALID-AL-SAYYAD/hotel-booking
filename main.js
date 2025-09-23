//header scroll
 /*
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove(".header-scrolled");
    }
};

//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a)){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
};





//Swiper slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical", // Vertical sliding
    loop: true, // Infinite loop
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500, // Autoplay delay
      disableOnInteraction: false, // Continue autoplay after interaction
    },
  });
  
  */
 // Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design
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
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

// Our Partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,        // Default number of slides visible
    spaceBetween: 30,        // Default space between slides
    loop: true,              // Enable looping
    autoplay: {
        delay: 2000,         // Auto-slide delay (2 seconds)
    },
    breakpoints: {
        991: {               // For screen widths <= 991px
            slidesPerView: 5,
            spaceBetween: 10,
        },
        767: {               // For screen widths <= 767px
            slidesPerView: 3,
            spaceBetween: 10,
        },
        320: {               // For screen widths <= 320px
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },
});




/* Show or hide the dropdown
const toggleButton = document.getElementById('occupancy-toggle');
const popup = document.getElementById('occupancy-popup');

toggleButton.addEventListener('click', () => {
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});

// Function to update values for adults, children, rooms
function updateValue(type, increment) {
    const element = document.getElementById(type);
    let value = parseInt(element.textContent);
    value += increment;

    if (value < 0) {
        value = 0;
    }

    element.textContent = value;
}

*/
function increment(type) {
    let input = document.getElementById(type);
    let value = parseInt(input.value);
    
    // Update the value
    if (type === 'adults' || type === 'rooms') {
        input.value = value + 1 < 30 ? value + 1 : 30; // Limit to 30
    } else if (type === 'child') {
        input.value = value + 1 < 10 ? value + 1 : 10; // Limit to 10
    }
}

function decrement(type) {
    let input = document.getElementById(type);
    let value = parseInt(input.value);
    
    // Update the value
    if (type === 'adults' || type === 'rooms') {
        input.value = value - 1 > 0 ? value - 1 : 1; // Minimum is 1
    } else if (type === 'child') {
        input.value = value - 1 >= 0 ? value - 1 : 0; // Minimum is 0
    }
}

