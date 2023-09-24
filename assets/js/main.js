// Sticky Header

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 13);
  console.log(this.window.scrollY);

});

// Header For Mobile
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function () {
  console.log('Button clicked'); // Add this line
  dropdownMenu.classList.toggle('open');
});




// Client Logo Slider

let clientswiper = new Swiper(".brand-slider", {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  loop:true,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {

    300: {
      slidesPerView: 2.2,
    },

    550: {
      slidesPerView: 2.5,
    },

    650: {
      slidesPerView: 2.6,
    },

    800: {
      slidesPerView: 4,
    },

    950: {
      slidesPerView: 4.5,
    },

    1050: {
      slidesPerView: 6,
    },
    1300: {
      slidesPerView: 6,
    },

  }
});


// Gallery Slider

let galleryswiper = new Swiper(".gallery-slider", {
  slidesPerView: 2.3,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay: {
    delay: 4000,
  },

  keyboard: true,
  breakpoints: {

    300: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 1,
    },

    550: {
      slidesPerView: 1,
    },

    650: {
      slidesPerView: 1.1,
    },

    768: {
      slidesPerView: 1.6,
    },

    950: {
      slidesPerView: 2.4,
    },

    950: {
      slidesPerView: 2.2,
    },

    1024: {
      slidesPerView: 2.3,
    },

    1300: {
      slidesPerView: 3,
    },
  },
});



// Careers Slider

let careerswiper = new Swiper(".careers-slider", {
  slidesPerView: 3.5,
  spaceBetween: 13,
  pagination: {
    clickable: true,
  },
  loop:true,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 1,
    },

    550: {
      slidesPerView: 1.5,
    },

    650: {
      slidesPerView: 1.7,
    },

    768: {
      slidesPerView: 2,
    },

    880: {
      slidesPerView: 2.2,
    },

    1024: {
      slidesPerView: 2.6,
    },
    1150: {
      slidesPerView: 2.9,
    },

    1300: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});


// Work Slider

let workswiper = new Swiper(".work-slider", {
  slidesPerView: 3.5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 1.4,
    },

    550: {
      slidesPerView: 2,
    },

    650: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
    },

    880: {
      slidesPerView: 2.3,
    },

    1024: {
      slidesPerView: 2.8,
    },

    1150: {
      slidesPerView: 2.4,
    },

    1300: {
      slidesPerView: 3.9,
    },
  },

  
  keyboard: true,
});


// Service Slider

let serviceswiper = new Swiper(".service-slider", {
  slidesPerView: 1.5,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },


  loop:true,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 1,
    },

    550: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1.4,
    },

    880: {
      slidesPerView: 1.6,
    },

    1024: {
      slidesPerView: 2,
    },

    1150: {
      slidesPerView: 2.6,
    },

    1300: {
      slidesPerView: 3,
    },
  },

  keyboard: true,
});