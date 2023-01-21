import people from "./data.js"
const container = document.querySelector('.section__testimonial-list');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const mTestimonialSelectors = document.querySelectorAll('.slider-indicator');
let currentGlobalSlider = 0;

const sliderTimeout = () =>setInterval(() => {
    defineAndRemoveSliderIndicatorClasses()
    startSlider();
}, 5000);

//populate slides from data
container.innerHTML = people.map((person, slideIndex)=>{
    const {img,name, text} = person;
    let position = 'next';
    if(slideIndex ===0){
        position = 'active';
    }
    if(slideIndex === people.length - 1){
        position = 'last';
    }
    return `<div class="section__testimonial-item ${position}" key="${slideIndex}">
    <div class="profile-img">
        <img src="${img}" alt="">
    </div>
    <h4>${name}</h4>
    <p>“${text}”</p>
    </div>`
}).join('');

const startSlider =(type)=>{
    let {active,last,next} = defineAndRemoveClasses()
    if(type==='prev'){
        active.classList.add('next')
        last.classList.add('active')
        next = last.previousElementSibling
        if (!next) {
            next = container.lastElementChild
        }
        next.classList.add('last')
        return;
    }
    active.classList.add('last')
    last.classList.add('next')
    next.classList.add('active')
}

nextBtn.addEventListener('click', ()=>{
    startSlider('next');
})
prevBtn.addEventListener('click', ()=>{
    startSlider('prev');
})


//Add click listeners to the mobile slider indicator buttons
mTestimonialSelectors.forEach(function(currentTestimonialSelect, i) {
    currentTestimonialSelect.addEventListener('click', function(e) {
        e.preventDefault()
        clearInterval(sliderTimeout)
        let {active,last,next} = defineAndRemoveClasses()
        const testimonyItems = document.querySelectorAll('.section__testimonial-item');

        //add classes relative to the current position of slider selected
        active = testimonyItems[i];
        next = testimonyItems[i].nextElementSibling;
        if(!next){
            next = container.firstElementChild
        }
        last = testimonyItems[i].previousElementSibling;
        if(!last){
            last = container.lastElementChild;
        }

        active.classList.add('active');
        next.classList.add('next');
        last.classList.add('last');
        defineAndRemoveSliderIndicatorClasses();
    })
})

function defineAndRemoveClasses() {
        let active = document.querySelector('.active');
        let last = document.querySelector('.last');
        let next = active.nextElementSibling;
        if(!next){
            next = container.firstElementChild
        }
        active.classList.remove('active')
        last.classList.remove('last')
        next.classList.remove('next')

        return {active,last,next}
}
function defineAndRemoveSliderIndicatorClasses() {
    const activeSliderIndicator = document.querySelector('.slider-indicator.active');
    activeSliderIndicator.classList.remove('active');
    currentGlobalSlider = document.querySelector('.section__testimonial-item.active').getAttribute("key");
    // console.log(currentGlobalSlider)
    mTestimonialSelectors[currentGlobalSlider].classList.add('active');
}


//Vanilla JS Swiper Implementation
let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
    if (touchendX < touchstartX) {
        console.log('swiped left')
        startSlider('next');
    }
    if (touchendX > touchstartX){
        console.log('swiped Right')
        startSlider('prev');
    }
    }

container.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

container.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
})


//AutoSlide timer
window.addEventListener('load', ()=>{
    sliderTimeout();
})