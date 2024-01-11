"use script";

let count = 0;

const changeNumColor = function (number) {
   if (!isNaN(+number.innerText)) {
      if (+number.innerText > 0) {
         number.style.color = "green";
      } else if (+number.innerText < 0) {
         number.style.color = "red";
      } else {
         number.style.color = "";
      }
   }
};

window.addEventListener("load", () => {
   const number = document.querySelector(".number");
   const buttons = document.querySelector(".button-container");
   number.innerText = count;

   buttons.addEventListener("click", (event) => {
      const target = event.target;

      switch (target.id) {
         case "decrease":
            count -= 1;
            break;
         case "reset":
            count = 0;
            break;
         case "increase":
            count += 1;
            break;
      }

      number.innerText = count;
      changeNumColor(number);
   });
});
