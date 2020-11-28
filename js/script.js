let inputMoney = document.querySelector('#money');
let inputCoin = document.querySelector('#coin');
let ExtrValue = document.querySelector('.currency-select');


inputMoney.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'https://blockchain.info/ru/ticker', true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            let course = JSON.parse(request.response);
            console.log(course);
            if(ExtrValue.value == 'RUB'){
                inputCoin.value = (+inputMoney.value / course.RUB.buy).toFixed(8);
            }else if(ExtrValue.value == 'USD'){
                inputCoin.value = (+inputMoney.value / course.USD.buy).toFixed(8);
            }else if(ExtrValue.value == 'AUD'){
                inputCoin.value = (+inputMoney.value / course.AUD.buy).toFixed(8);
            } 
        } else {
            console.log("Что-то пошло не так");
        }
    });
});