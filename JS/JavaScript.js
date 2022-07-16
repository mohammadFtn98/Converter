let $ = document;

let isFahrenheit = false;


let pageTitle = $.querySelector('#title');

let input = $.querySelector('#temp-input');

let result = $.querySelector('#result');

let convertButton = $.querySelector('#convert-btn');

let resetButton = $.querySelector('#reset-btn');

let changeButton = $.querySelector('#change-btn');

convertButton.addEventListener('click', convertor);

resetButton.addEventListener('click', resetConvert);

changeButton.addEventListener('click', changeConvert);

function convertor() {
    // alert(input.value);
    let temperature = input.value;
    temperature = Number(temperature);
    if (isNaN(temperature)) {
        //alert('eror');
        result.innerHTML = 'The input data is invalid.';
        result.style.visibility = 'visible';
    } else {
        if (isFahrenheit) {
            temperature = temperature - 32;
            temperature = temperature / 1.8;
            result.innerHTML = String(temperature) + '℃';
            result.style.visibility = 'visible';

        } else {
            temperature = temperature * 1.8;
            temperature = temperature + 32;
            result.innerHTML = String(temperature) + '℉';
            result.style.visibility = 'visible';
        }
    }


}

function resetConvert() {
    //alert('reseted');
    input.value = '';
    result.style.visibility = 'hidden';

}

function changeConvert() {
    //alert('changed');
    if (!isFahrenheit) {
        isFahrenheit = true;
        pageTitle.innerHTML = 'Converter ℉ TO ℃'
        input.removeAttribute('placeholder');
        input.setAttribute('placeholder', '℉');
        $.title = '℉ TO ℃';
        result.style.visibility = 'hidden';
        input.value = '';
    } else {
        isFahrenheit = false;
        pageTitle.innerHTML = 'Converter ℃ To ℉'
        input.removeAttribute('placeholder');
        input.setAttribute('placeholder', '℃');
        $.title = '℃ To ℉';
        result.style.visibility = 'hidden';
        input.value = '';
    }
}