window.addEventListener('DOMContentLoaded',fetchData);

let adId = document.querySelector('#ad-id');
let advice = document.querySelector(".advice");
let dice = document.querySelector('.img-wrap');
async function fetchData () {
    try {
        let response = await (await fetch('https://api.adviceslip.com/advice')).json();
        adId.textContent = `advice #${response.slip.id}`
        advice.textContent = response.slip.advice;
    }
    catch (reason){
        console.log(`Reason: ${reason}`);
    }
}

dice.addEventListener('click',fetchData);