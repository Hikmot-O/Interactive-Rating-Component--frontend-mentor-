"use strict";

let rating = "";

const ratingNumber = document.querySelectorAll(".rating-number");
const ratingCard = document.querySelector(".rating-card");
const ratingValue = document.querySelector(".rating-value");
const thankYouCard = document.querySelector(".thankyou-card");
const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btnText");

for(let i=0; i<ratingNumber.length; i++){
  ratingNumber[i].addEventListener('click', ()=>{
    for(let j=0; j<ratingNumber.length; j++){
      ratingNumber[j].classList.remove('rating-active');
    }
    ratingNumber[i].classList.add('rating-active');
    rating = ratingNumber[i].textContent;
  });
}

const submitHandler = (e) => {
  e.preventDefault();
  if (rating !== "") {
    ratingCard.style.display = "none";
    ratingValue.innerHTML = rating;
    thankYouCard.style.display = "flex";
  }
};

btn.addEventListener("click", submitHandler);
btnText.addEventListener("click", submitHandler);
