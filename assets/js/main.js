// menu
let flag = false;
const sidebare = document.querySelector(".sidebare");

const query = window.matchMedia('(min-width: 768px)');

query.addEventListener('change', function(event) {
  if (sidebare.matches) {
    sidebare.style.display = 'none';
  } else {
    sidebare.style.display = 'block';
  }
});

function menubutton() {
    if (flag) {
      sidebare.style.display = "none";
      flag = false;
    } else {
      sidebare.style.display = "block";
      flag = true;
    }

 
}
// swiper slide

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type:'bullets',

  },
  autoplay: {
    delay: 3000,
  },
  
});


// select tag for cities
const selectCity = document.getElementById('city');

fetch('https://iran-locations-api.ir/api/v1/fa/cities')

  .then(response => response.json())
  .then(data => {

    data.forEach(city => {
      const option = document.createElement('option');
      option.textContent = city.name;
      selectCity.appendChild(option);
      
    });
  });


  const selectBtn = document.querySelector('.select-btn');
const content = document.querySelector('.content');

selectBtn.addEventListener('click', () => {
  content.classList.toggle('open'); // Toggle the 'open' class
});

