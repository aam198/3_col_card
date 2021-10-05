const colum1 = document.getElementById('column1');
const colum2 = document.getElementById('column2');
const colum3 = document.getElementById('column3');
const car = document.querySelector('.car');
const suv = document.querySelector('.suv');
const luxury = document.querySelector('.luxury');


var keyframes = [
  { opacity: 0.7, easing: 'ease-in' }, 
  { opacity: 1 }
]

var options = {
  duration: 500,
  easing: 'ease-in',
}

//Car 

column1.addEventListener("mouseover", function(event) {

  car.animate(keyframes, options);
  car.style.fill="#fff";

  setTimeout(function() {
    car.style.color = "";
  }, 500);
}, false);

column1.addEventListener("mouseout", function(event) {
  car.style.fill="#FFD473";
})


//SUV

column2.addEventListener("mouseover", function(event) {

  suv.animate(keyframes, options);
  suv.style.fill="#fff";

  setTimeout(function() {
    suv.style.color = "";
  }, 500);
}, false);

column2.addEventListener("mouseout", function(event) {
  suv.style.fill="#26B5C0";
})

// Luxury
column3.addEventListener("mouseover", function(event) {

  luxury.animate(keyframes, options);
  luxury.style.fill="#fff";

  setTimeout(function() {
    luxury.style.color = "";
  }, 500);
}, false);

column3.addEventListener("mouseout", function(event) {
  luxury.style.fill="#19B89D";
})

