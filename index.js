// const cards=document.getElementsByClassName('card');
// console.log(cards);
let titleCount=1;
let totalPrice=0;
const cards=document.querySelectorAll('.card');
console.log(cards);
// cards.forEach( (e)=> {
//     console.log(e);
// })
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(card);
    card.addEventListener('click',function () {
        // console.log('clicked');
        const title=card.querySelector('h3').innerText;
        // console.log(title.innerText);
        const price=parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(price.innerText);

        const titleContainer=document.getElementById('title-container');
        const p=document.createElement('p');
        p.innerText=titleCount+" "+title;
        titleContainer.appendChild(p);
        titleCount++;
        totalPrice=totalPrice+price;
        const cartPrice=document.getElementById('totalPrice');
        cartPrice.innerText=totalPrice.toFixed(2);
        
    })
    
}