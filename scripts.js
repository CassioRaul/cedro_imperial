function addCard(listId) {
    const inputId = listId + '-input';
    const inputValue = document.getElementById(inputId).value.trim();
    if (inputValue !== '') {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = inputValue;
        
        const list = document.getElementById(listId);
        list.appendChild(card);
        
        document.getElementById(inputId).value = '';
    }
}
