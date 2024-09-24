
function getMainTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
      return textNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
      return textNumber;
}

function getInputValueById(id){
    const inputMoney = document.getElementById(id).value;
    if(isNaN(inputMoney) || inputMoney <= 0 ){
        return;
    }
    const inputNumberMoney = parseFloat(inputMoney);
      return inputNumberMoney;  
}

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
        <h3 class="text-xl font-bold text-black"> ${id} Taka is Donated for ${id2}</h3>
        <p class="text-sm mt-2">Date: ${displayDateTime()}</p>
        `
      return historyText;
}


