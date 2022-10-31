"use strict";
let rating = "";

const ratings = document.querySelector(".ratings");
const ratingNumber = document.querySelectorAll(".rating-number");
const ratingCard = document.querySelector(".rating-card");
const ratingValue = document.querySelector(".rating-value");
const thankYouCard = document.querySelector(".thankyou-card");
const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btnText");

// console.log(ratingNumber.length);

// ratings.addEventListener("click", (e) => {
//   const element = e.target;

//   // Array.from(ratingNumber).map(
//   //   (el) => (el.style.background = "rgba(149, 158, 172, 0.15)")
//   // );
//   console.log(element.className === "rating-number circle");
//   if (element.className === "rating-number circle") {
//     //Update UI
//     // element.style.background = "hsl(25, 97%, 53%)";
//     // element.style.color = "hsl(0, 0%, 100%)";

//     element.classList.add("rating-active");

//     //Update state
//     rating = element.textContent;
//   } else {
//     return;
//   }

  // Array.from(ratingNumber).map((el) =>
  //   el.addEventListener("click", function (e) {
  //     el.classList.toggle("rating-active");
  //   })
  // );
// });

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

// for(let i=0; i<ratingNumber.length; i++){
//   console.log(ratingNumber[i].className.includes('circle'));
// }
//element.classList.add("quote");
for(let i=0; i<ratingNumber.length; i++){
  // console.log(ratingNumber[i].className.includes('circle'));
  ratingNumber[i].addEventListener('click', ()=>{
    for(let j=0; j<ratingNumber.length; j++){
      ratingNumber[j].classList.remove('rating-active');
    }
    ratingNumber[i].classList.add('rating-active');
    rating = ratingNumber[i].textContent;
  })
}
