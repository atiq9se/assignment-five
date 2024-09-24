
function getMainTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    if(isNaN(textValue) || textValue <= 0 ){
        alert('insuffiencint balance');
        return 0;
    }
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getInputValueById(id){
    const inputMoney = document.getElementById(id).value;
    if(isNaN(inputMoney) || inputMoney <= 0 ){
         alert('Please enter a valid number');
         return 0;
    }
    const inputNumberMoney = parseFloat(inputMoney);
    return inputNumberMoney;   
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    if(isNaN(textValue) || textValue <= 0 ){
        alert('Please enter a valid number');
        return 0;
    }
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// function displayDateTime() {
//     var now = new Date();
//     var d = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() );
//     localOffset = now.getTimezoneOffset() * 60000;
//     var dateTime = new Date(d + localOffset);
//     return dateTime;
// }

function displayDateTime(){
    var now = new Date();
    var fullDate = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    localUtc = now.getTimezoneOffset() * 60000;
    var dateTime = new Date(fullDate + localUtc);
    return dateTime;
}

function history(id, id2){
    const historyText = document.createElement('div')
    historyText.className = "p-4 border rounded border-gray-200 mt-3";
    historyText.innerHTML = ` 
        <h3 class="text-xl font-bold text-black"> ${id} Taka ${id2}</h3>
        <p class="text-sm mt-2">Date: ${displayDateTime()}</p>
        `
    return historyText;
}


