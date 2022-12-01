//Получаем данные с сервера
async function getCurrencies(){
                                    //Получаем данные по апи в json
    const response =  await  fetch('https://www.cbr-xml-daily.ru/daily_json.js');
 
                    //Переводим в js -> Получаем данные в js
    const data = await response.json();

    //Рендерим на странице
    render(data);
    console.log('rabotaet')
}    




function render(data){
                    //Выводим из данных валюты
    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

                    //Находим в разметке
    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');

                    //Вставляем в разметку валюты
    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}

// getCurrencies() 


const button2 = document.querySelector('.button2');

button2.addEventListener('click', getCurrencies)

