document.getElementById('show-donation-btn')
    .addEventListener('click', function () {
        showActiveButton('donate-now-section');
    });

document.getElementById('show-history-btn')
    .addEventListener('click', function () {
        showActiveButton('history-now-section');

    });

    const showDonationBtn = document.getElementById('show-donation-btn');
    const showHistoryBtn = document.getElementById('show-history-btn');



    showDonationBtn.addEventListener('click', () => {
        toggleButton(showDonationBtn, showHistoryBtn);
    });
    
    showHistoryBtn.addEventListener('click', () => {
        toggleButton(showHistoryBtn, showDonationBtn);
    });