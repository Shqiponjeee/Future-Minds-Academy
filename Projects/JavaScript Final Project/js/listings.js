document.addEventListener('DOMContentLoaded', function () {
    const editIcons = document.querySelectorAll('.edit');
    const deleteIcons = document.querySelectorAll('.delete');


function handleEditClick(event) {
    const card = event.target.closest('.card');
    if (card) {
        const titleElement = card.querySelector('.title');
        const paragraphElement = card.querySelector('.paragraph');

       
        titleElement.contentEditable = true;
        paragraphElement.contentEditable = true;

        titleElement.focus();

       
        event.target.textContent = 'save'; 
        event.target.classList.remove('edit'); 
        event.target.classList.add('save'); 

        event.target.removeEventListener('click', handleEditClick); 
        event.target.addEventListener('click', handleSaveClick); 
    }
}

function handleSaveClick(event) {
    const card = event.target.closest('.card');
    if (card) {
        const titleElement = card.querySelector('.title');
        const paragraphElement = card.querySelector('.paragraph');

        titleElement.contentEditable = false;
        paragraphElement.contentEditable = false;

        event.target.textContent = 'edit'; 
        event.target.classList.remove('save'); 
        event.target.classList.add('edit'); 

       
        event.target.removeEventListener('click', handleSaveClick);
        event.target.addEventListener('click', handleEditClick); 

       
        const editedTitle = titleElement.textContent;
        const editedParagraph = paragraphElement.textContent;

  
        console.log('Edited Title:', editedTitle);
        console.log('Edited Paragraph:', editedParagraph);
    }
}




 
    function handleDeleteClick(event) {
        console.log('Delete icon clicked');
        const card = event.target.closest('.card');
        if (card) {
            card.remove(); 

            
            const deletedCards = JSON.parse(localStorage.getItem('deletedCards')) || [];
            deletedCards.push(card.dataset.cardId);
            localStorage.setItem('deletedCards', JSON.stringify(deletedCards));
        }
    }

    editIcons.forEach(icon => {
        icon.addEventListener('click', handleEditClick);
    });

    
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', handleDeleteClick);
    });

 
    const deletedCards = JSON.parse(localStorage.getItem('deletedCards')) || [];
    deletedCards.forEach(cardId => {
        const deletedCard = document.querySelector(`.card[data-card-id="${cardId}"]`);
        if (deletedCard) {
            deletedCard.remove();
        }
    });
});
