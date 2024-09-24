document.getElementById('noakhaliDonationBtn').addEventListener('click', function(){
   
    const mainBalance = getMainTextValueById('mainBalance');
    console.log(mainBalance);
    const noakhaliInputMoney = getInputValueById("noakhaliInputMoney");
    console.log(noakhaliInputMoney);

    if(mainBalance > 0 && mainBalance >= noakhaliInputMoney){
        
        const newMainBalance = mainBalance - noakhaliInputMoney;
        console.log(newMainBalance);
        document.getElementById('mainBalance').innerText=newMainBalance;

        const noakhaliBalance = getTextValueById('noakhaliBalance');
        console.log(noakhaliBalance);
        const newNoakhaliBalance = noakhaliBalance + noakhaliInputMoney;
        console.log(newNoakhaliBalance);
        document.getElementById('noakhaliBalance').innerText=newNoakhaliBalance;
        if( noakhaliInputMoney > 0){
            const noakhaliTitle = document.getElementById('noakhaliTitle').innerText;
            const historyText= history(noakhaliInputMoney, noakhaliTitle);
            document.getElementById('donationHistory').appendChild(historyText);

           
        }
        my_modal_1.showModal()

    }else{
        alert('balance low')
    }
    
})

document.getElementById('feniDonationBtn').addEventListener('click', function(){
    const mainBalance = getMainTextValueById('mainBalance');
    console.log(mainBalance);

    if(mainBalance > 0){
        const feniInputMoney = getInputValueById("feniInputMoney");
        console.log(feniInputMoney);

        const feniBalance = getTextValueById('feniBalance');
        console.log(feniBalance);

        const newFeniBalance = feniBalance + feniInputMoney;
        console.log(newFeniBalance);
        document.getElementById('feniBalance').innerText= newFeniBalance;

        const newBalance = mainBalance - feniInputMoney;
        console.log(newBalance);
        document.getElementById('mainBalance').innerText=newBalance;

        if(feniInputMoney > 0){
            const feniTitle = document.getElementById('feniTitle').innerText;
            const historyText = history(feniInputMoney, feniTitle);
            document.getElementById('donationHistory').appendChild(historyText);
        }
        my_modal_1.showModal()
    }
})

document.getElementById('quotaDonationBtn').addEventListener('click', function(){
    const mainBalance = getMainTextValueById('mainBalance');
    console.log(mainBalance);

    if(mainBalance > 0){
        const quotaInputMoney = getInputValueById("quotaInputMoney");
        console.log(quotaInputMoney);

        const quotaBalance = getTextValueById('quotaBalance');
        console.log(quotaBalance);

        const newQuotaBalance = quotaBalance + quotaInputMoney;
        console.log(newQuotaBalance);
        document.getElementById('quotaBalance').innerText = newQuotaBalance;

        const newBalance = mainBalance - quotaInputMoney;
        console.log(newBalance);
        document.getElementById('mainBalance').innerText=newBalance;

        if(quotaInputMoney > 0){
            const quotaTitle = document.getElementById('quotaTitle').innerText;
            const historyText = history(quotaInputMoney, quotaTitle);
            document.getElementById('donationHistory').appendChild(historyText);
        }
        my_modal_1.showModal()
    }
})