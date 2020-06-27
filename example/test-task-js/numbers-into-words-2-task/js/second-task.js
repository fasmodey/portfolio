const input = document.querySelector('#inputValue');

const oneNine = {
    1: 'one',
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine'
};

const tenNineteen = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

const twentyNinety = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

const hundred = 'hundred';
const thousand = 'thousand';
const million = 'million';
const regExp = /(?=(?:\d{3})+$)/;

//Вывод полученного результата на страницу
convertNumber.addEventListener('click', () => {
    let inputNumber = input.value;
    let centStr = '';
    let splitedArray;
    let floatArray;
    let integerArray;

    const span = document.createElement('span');
    const hr = document.createElement('hr');
    span.classList.add('function-result');
    
    if (!Number.isInteger(+inputNumber)) {
        splitedArray = inputNumber.split('.');
        integerArray = splitedArray[0];
        floatArray = splitedArray[1];
        
        if (floatArray[0] === '0' && floatArray.length > 1) {
            floatArray = floatArray.substr(1, );
            centStr += `${oneToHundred(floatArray)} cents`;
        } else if (+floatArray) {
            centStr += `${oneToHundred(floatArray)} cents`;
        }
    } else {
        integerArray = String(parseInt(inputNumber));
    };
        
    let result = integerArray <= 1 ? `${formattingString(integerArray)} dollar ${centStr}`:
        `${formattingString(integerArray)} dollars ${centStr}`;

    span.textContent = result;

    document.querySelector('.container').appendChild(span);
    document.querySelector('.container').appendChild(hr);
});

const formattingString = (numberValue) => {
    let str = '';

    if (numberValue === '1000000000') {
        str += 'one billion';
    }

    if (numberValue === '' || numberValue === '0') {
        str += 'zero';
    }

    if(numberValue >= 1 && numberValue < 100) {
        str += oneToHundred(numberValue);
    } else if(numberValue >= 100 && numberValue < 1000) {
        str += houndredTothousand(numberValue);
    } else if (numberValue >= 1000 && numberValue < 999999) {
        str += thousandToMillion(numberValue);
    } else if (numberValue >= 1000000 && numberValue < 999999999) {
        str += millionToBillion(numberValue);
    }

    return str;
}

const oneToHundred = (number) => {
    let str = '';

    if (!+number) {
        return str;
    }

    if (number < 10) {
        str += `${oneNine[+number]}`;
    } else if(number >= 10 && number < 20) {
        str += `${tenNineteen[number]}`;
    } else if(number >= 20 && number < 100) {
        str += number[1] === '0' ? `${twentyNinety[number]}` : `${twentyNinety[number[0] + '0']}-${oneNine[number[1]]}`;
    }

    return str;
};

const houndredTothousand = (number) => {
    let str = '';

    if (!+number) {
        return str;
    } else if (!+number[0]) {
        str += `${oneToHundred(+number.substr(1, 2))}`;
        return str;
    } else {
        str += `${oneNine[(number[0])]} ${hundred} ${oneToHundred(number.substr(1, 2))}`;
        return str;
    }

}

const thousandToMillion = (number) => {
    let str = '';
    let integerArr;
    integerArr = number.split(regExp);

    str += integerArr[0] < 100 ? `${oneToHundred(integerArr[0])} ${thousand} ${houndredTothousand(integerArr[1])}`:
        `${houndredTothousand(integerArr[0])} ${thousand} ${houndredTothousand(integerArr[1])}`;

    return str;
};

const millionToBillion = (number) => {
    let integerArr;
    let str = '';

    integerArr = number.split(regExp);

    if (!houndredTothousand(integerArr[1])) {
        str += integerArr[0] < 100 ? `${oneToHundred(integerArr[0])} ${million} ${houndredTothousand(integerArr[2])}`:
        `${houndredTothousand(integerArr[0])} ${million} ${houndredTothousand(integerArr[2])}`;
    } else {
        str += integerArr[0] < 100 ? `${oneToHundred(integerArr[0])} ${million} ${houndredTothousand(integerArr[1])} ${thousand} ${houndredTothousand(integerArr[2])}`:
        `${houndredTothousand(integerArr[0])} ${million} ${houndredTothousand(integerArr[1])} ${thousand} ${houndredTothousand(integerArr[2])}`;
    }

    return str;
}