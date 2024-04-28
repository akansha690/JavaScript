
let frstStep = document.querySelector('.frstStep');
let secStep = document.querySelector('.secStep');
let thrdStep = document.querySelector('.thrdStep');
let frthStep = document.querySelector('.frthStep');
let fthStep = document.querySelector('.fthStep');
let para = document.getElementsByClassName('para');




let delay = async (ele, timedelay) => {
    setTimeout(() => {
        ele.style.display = "block";
    }, timedelay);

};

delay(frstStep, 1000);
delay(secStep, 4000);
delay(thrdStep, 6000);
delay(frthStep, 10000);
delay(fthStep, 13000);

async function blinking() {

    let t = setInterval(() => {

        let last = document.body.getElementsByTagName('p');
        for (let item of last) {

            if (item.innerHTML.endsWith('...')) {
                item.innerHTML = item.innerHTML.slice(0, item.innerHTML.length - 3);
            }
            else {
                item.innerHTML = item.innerHTML + '.';
            }
        }

    }, 300);

    setTimeout(() => {
        clearInterval(t);
    }, 15000); 

};

blinking();
