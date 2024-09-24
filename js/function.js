function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}


function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showActiveButton(id){
    document.getElementById('donate-now-section').classList.add('hidden');
    document.getElementById('history-now-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}

function toggleButton(activeButton, inactiveButton) { 

    activeButton.classList.add('bg-[#B4F461]', 'text-black', 'border-[1px]', 'rounded-md');
    activeButton.classList.remove('bg-white', 'text-black', );

    // Set the inactive button to white
    inactiveButton.classList.add('bg-white', 'text-[black]', 'border-[1px]');
    inactiveButton.classList.remove('bg-[#B4F461]', 'text-white', 'border-2');
}