/* 
Script document for menu item card
*/

let cardContainer = document.querySelector('.items-card');
let cardBox = document.querySelectorAll('.card');

document.querySelectorAll('.items-container .item').forEach(item => {
    item.onclick = () => {
        cardContainer.style.display = 'flex';
        let name = item.getAttribute('data-name');
        cardBox.forEach(card => {
            let target = card.getAttribute('data-target');
            if (name == target) {
                card.classList.add('select');
            }
        });
    };
});

cardBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('select');
        cardContainer.style.display = 'none';
    }
});