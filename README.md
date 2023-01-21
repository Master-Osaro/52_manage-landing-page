# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Live Demo](https://manage-o.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties


### What I Learned
- Mobile Nav with Checkbox hack 
- Vanilla JS Swiper Implementation [Stack Overflow](https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android)


```js

let status = false;
let checkbox = document.querySelector('#mobile-menu__checkbox');
document.querySelector('.nav__ham-menu').addEventListener('click', (e)=>{
    e.preventDefault();
    status=!status;
    checkbox.checked=status;
})

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


```




## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)

**Had fun building!** 🚀