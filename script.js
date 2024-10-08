async function getpromise() {
    try {
        let response = await fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json');
        let users = await response.json();
        let list = document.querySelector('.list');  

        users.forEach(user => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${user.pic}" alt="${user.name}">
                <h3>${user.name}</h3>
                <p><strong>Category:</strong> ${user.desc1}</p>
                <p><strong>Information:</strong> ${user.fulldesc}</p>
                <p><strong>Price:</strong> <strong>${user.price}</strong></p>
            `;
            list.appendChild(card); 
                });

        let filterInput = document.getElementById('filterInput');

        filterInput.addEventListener('input', function () {
            let inputValue = filterInput.value.toLowerCase();
            let cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                let name = card.querySelector('h3').textContent.toLowerCase();  
                if (name.includes(inputValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

    } catch (error) {
        console.error("Ошибка при получении данных", error);
    }
}

getpromise();