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
// const Slide =(index) => {
//   for(let dot of dots) {
//     dot.classList.remove('active')
//   }
//   dots[index].classList.add('active')

// }

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









//______________________________________________________________________//


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