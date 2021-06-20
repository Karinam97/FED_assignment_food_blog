"use strict";

const slides = document.querySelectorAll('#slides article');
let currentSlide = 0;
function setSlide(slide_index){
  let current = document.querySelectorAll('#slides article.current');
  if(current){
    current.item("current").classList.remove("current");
  }
  let mySlide = slides.item(slide_index);
  if(mySlide){
    slides.item(slide_index).classList.add('current');
  }

}
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

function prevSlide(ev) {
  currentSlide--;
  if(currentSlide<0){
    currentSlide+=slides.length;
  }
  setSlide(currentSlide);
}
function nextSlide(ev) {
  currentSlide++;
  if(currentSlide>=slides.length){
    currentSlide=0;
  }
  setSlide(currentSlide);
}
setSlide(currentSlide);
