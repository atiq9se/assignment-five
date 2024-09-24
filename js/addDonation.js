document.getElementById('noakhaliDonationBtn').addEventListener('click', function(){
    const mainBalance = getMainTextValueById('mainBalance');

    const noakhaliInputMoney = getInputValueById("noakhaliInputMoney");

    if(mainBalance > 0 && mainBalance >= noakhaliInputMoney){ 
        const newMainBalance = mainBalance - noakhaliInputMoney;
        document.getElementById('mainBalance').innerText=newMainBalance.toFixed(2);

        const noakhaliBalance = getTextValueById('noakhaliBalance');
        const newNoakhaliBalance = noakhaliBalance + noakhaliInputMoney;  
        document.getElementById('noakhaliBalance').innerText=newNoakhaliBalance.toFixed(2);
        if( noakhaliInputMoney > 0){
            const noakhaliTitle = document.getElementById('noakhaliTitle').innerText;
            const historyText= history(noakhaliInputMoney.toFixed(2), noakhaliTitle);
            document.getElementById('donationHistory').appendChild(historyText);
        }
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    } 
})

document.getElementById('feniDonationBtn').addEventListener('click', function(){
    const mainBalance = getMainTextValueById('mainBalance');

    const feniInputMoney = getInputValueById("feniInputMoney");

    if(mainBalance > 0 && mainBalance >= feniInputMoney){
        const newMainBalance = mainBalance - feniInputMoney;
        document.getElementById('mainBalance').innerText=newMainBalance.toFixed(2);

        const feniBalance = getTextValueById('feniBalance');
        const newFeniBalance = feniBalance + feniInputMoney;
        document.getElementById('feniBalance').innerText= newFeniBalance.toFixed(2);
        if(feniInputMoney > 0){
            const feniTitle = document.getElementById('feniTitle').innerText;
            const historyText = history(feniInputMoney.toFixed(2), feniTitle);
            document.getElementById('donationHistory').appendChild(historyText);
        }
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    }
})

document.getElementById('quotaDonationBtn').addEventListener('click', function(){
    const mainBalance = getMainTextValueById('mainBalance');

    const quotaInputMoney = getInputValueById("quotaInputMoney");

    if(mainBalance > 0 && mainBalance >= quotaInputMoney){
        const newMainBalance = mainBalance - quotaInputMoney;
        document.getElementById('mainBalance').innerText=newMainBalance.toFixed(2);

        const quotaBalance = getTextValueById('quotaBalance');
        const newQuotaBalance = quotaBalance + quotaInputMoney;
        document.getElementById('quotaBalance').innerText = newQuotaBalance.toFixed(2);
        if(quotaInputMoney > 0){
            const quotaTitle = document.getElementById('quotaTitle').innerText;
            const historyText = history(quotaInputMoney.toFixed(2), quotaTitle);
            document.getElementById('donationHistory').appendChild(historyText);
        }
        my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation amount');
    }
})