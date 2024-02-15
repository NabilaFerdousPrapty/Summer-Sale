// const cards=document.getElementsByClassName('card');
// console.log(cards);
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
console.log(cards);
// cards.forEach( (e)=> {
//     console.log(e);
// })
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  // console.log(card);
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;

    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + " " + title;
    titleContainer.appendChild(p);
    titleCount++;
    totalPrice = totalPrice + price;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const inputFieldElement = document.getElementById("input-field");
  const inputFieldText = inputFieldElement.value;
  const inputField = inputFieldText.split(" ").join("").toUpperCase();
  // console.log(inputFieldText);
  if (totalPrice >= 200) {
    if (inputField === "SALE20") {
      const discountPriceElement = document.getElementById("discountPrice");
      // totalPrice=totalPrice-.2*totalPrice;
      const discountAmount = 0.2 * totalPrice;
      discountPriceElement.innerText = discountAmount.toFixed(2);
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice - discountAmount;
      inputFieldElement.value = " ";
      
    } else {
      alert("Invalid coupon code");
      inputFieldElement.value = " ";
    }
  } else {
    alert("Please spend more than $200 to apply the coupon");
    inputFieldElement.value = " ";
  }
});
// function makePurchase() {
//     const purchaseMessage = document.getElementById("purchase-massage");
//     purchaseMessage.classList.remove("hidden");
//   }
  function goHome() {
    const purchaseMessage = document.getElementById("purchase-massage");
    purchaseMessage.classList.add("hidden");
  }

const purchaseButton = document.getElementById("purchase-button");
purchaseButton.addEventListener('click',function () {
    if (totalPrice>0) {
        const purchaseMessage = document.getElementById("purchase-massage");
        purchaseMessage.classList.remove("hidden");
    }
    
})
