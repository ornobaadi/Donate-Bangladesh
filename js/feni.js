document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const addMoney = getInputValue('feni-donate-amount');

        const donate = getTextValue('feni-account');

        const balance = getTextValue('account-balance');


        if (isNaN(addMoney)) {
            alert('Failed to donate money');
            return;
        }

        if (addMoney <= 0) {
            alert('Write the correct amount you want to donate');
            return;
        }

        else {

            const newDonate = donate + addMoney;

            document.getElementById('feni-account').innerText = newDonate;

        }

        if (addMoney > balance) {

            alert('You do not have enough money to donate');
            return;
        }

        else {
            const newBalance = balance - addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('my_modal_1').showModal();

            const div = document.createElement('div');
            div.className = "border rounded-[16px] p-8 space-y-4"
            div.innerHTML = `
                <h4 class="text-2xl px-2 font-bold">${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh </h4>
                <p class="text-gray-500 font-light text-base bg-slate-50 rounded-lg p-2">
                Date: ${new Date().toString()}</p>
            `

            document.getElementById('history-container').appendChild(div);

        }


    });