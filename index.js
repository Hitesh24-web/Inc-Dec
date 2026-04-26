const countValue = document.querySelector('#core-text');

function decrement(){
    let value =  parseInt(countValue.innerText);
        value = value - 1;
        countValue.innerText = value;
};

function increment(){
    let value =  parseInt(countValue.innerText);
        value = value + 1;
        countValue.innerText = value;
};

