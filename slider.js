const sliderLine = document.querySelector('.carosel__slider-line');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const currentSlideNumberElement = document.querySelector('.carosel__top-row h5 span b');



const slides = Array.from(sliderLine.children);
const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];
const firstSlideCopy = firstSlide.cloneNode(true);
const lastSlideCopy = lastSlide.cloneNode(true);
sliderLine.prepend(lastSlideCopy);
sliderLine.append(firstSlideCopy);
const dots = document.querySelectorAll('.dot');
const allSlides = Array.from(sliderLine.children);


let position = 420;
let dotIndex = 0;


const nextSlide = () => {
  if (position < (dots.length - 1) * 420) {
    position += 420;
    dotIndex++
  } else {
    setTimeout(() =>{
      sliderLine.style.transition = 'none';
    })

    position = 420;
    dotIndex = 0;
  }
  sliderLine.style.transition = "1s";
  sliderLine.style.left = -position + 'px';
  Slide(dotIndex)
}

const prevSlide = () => {
  if (position > 0 ) {
    position -= 420;
    dotIndex--
  } else {
    setTimeout(() =>{
      sliderLine.style.transition = "none";
    })
    position = (dots.length - 1) * 420;
    dotIndex = (dots.length - 1);
  }
  sliderLine.style.transition = "1s";
  sliderLine.style.left = -position + 'px';
  Slide(dotIndex)

}
 
const Slide = (dotIndex) =>{
  const currentSlideNumberElement = document.querySelector('.carosel__top-row h5 span b');
  currentSlideNumberElement.textContent = dotIndex + 1;
}


nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)


dots.forEach((dot, index) => {
  dot.addEventListener('click', ()=>{
    position = 420 * index
    sliderLine.style.left = -position + 'px'
    dotIndex = index;
    Slide(dotIndex)

  })
})

setInterval(() => {
  nextSlide()
}, 4000);









//_____________активная кнопка _________________________________________________________//


const leftButton = document.querySelector('.button_colorblack');
const rightButton = document.querySelector('.button_colored');


leftButton.addEventListener('click', function() {
  leftButton.classList.add('active');
  rightButton.classList.remove('active');
});


rightButton.addEventListener('click', function() {
  rightButton.classList.add('active');
  leftButton.classList.remove('active');
});

//_____бегущая строка________________________________________________________//
document.querySelector('.string__line').addEventListener('mouseover', function(event) {
  if (event.target.classList.contains('string')) {
    event.target.style.fontSize = '28px';
    event.target.style.color = '#FBCE51';
  }
});

document.querySelector('.string__line').addEventListener('mouseout', function(event) {
  if (event.target.classList.contains('string')) {
    event.target.style.fontSize = '22px';
    event.target.style.color = '#FFFFFF' ;
  }
});



let width = window.innerWidth;

function mytable() {
  const newWidth = window.innerWidth;
  if (newWidth === width) {
    // Размер окна не изменился, не делать ничего
    return;
  }
  width = newWidth;

  const mediaQuery = window.matchMedia('(max-width: 380px)');
  const table = document.querySelector("table");
  const row3 = document.getElementById('row3');
  const row4 = document.getElementById('row4');

  if (mediaQuery.matches) {
      var temp = row3.innerHTML;
      row3.innerHTML = row4.innerHTML;
      row4.innerHTML = temp;
  } else {
    
  }
}

// Добавить обработчик событий resize
window.addEventListener('resize', mytable);

//______________второй слайдер______________________________________________//

const slider = document.querySelector('.layout-3-column-grid');
const next2 = document.querySelector('.button-next2');
const prev2 = document.querySelector('.button-prev2');
const dots2 = document.querySelectorAll('.dot2');

let position2 = 0 ;
let dotindex2=0;

const newSlider = () => {
  if(position2 < (dots2.length - 2) * 355){
      position2 += 355;
      dotindex2++
      slider.style.left = -position2 + 'px';
      prev2.style.backgroundColor = ''; // Reset color
      prev2.disabled = false; // Enable button
  } else {
      position2 = 1420;
     dotindex2 = dots2.length - 1; // Set to last dot
      slider.style.left = -position2 + 'px';
      next2.style.backgroundColor = '#D6D6D6'; // Set color to D6D6D6
      next2.disabled = true; // Disable button
  }
  thisSlide(); // Add this line
}

const prevSlider = () => {
  if(position2 > 0){
      position2 -= 355;
      dotindex2--
      slider.style.left = -position2 + 'px';
      next2.style.backgroundColor = ''; // Reset color
      next2.disabled = false; // Enable button
  } else {
      position2 = 0;
      dotindex2 = 0
      slider.style.left = -position2 + 'px';
      prev2.style.backgroundColor = '#D6D6D6'; // Set color to D6D6D6
      prev2.disabled = true; // Disable button
  }
  thisSlide(); // Add this line
}


const thisSlide = () =>{
  for(let dot of dots2){
    dot.classList.remove('active')
  }
  dots2[dotindex2].classList.add('active')
}


next2.addEventListener('click', newSlider );
prev2.addEventListener('click', prevSlider );


dots.forEach((dot,index) =>{
 dot.addEventListener('click', () =>{
  position2 = 355 * index
  slider.style.left = -position2 + 'px'
  dotindex2 = index
  thisSlide(dotindex2)
 })
})






