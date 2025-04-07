// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.querySelector('#userNameInput');
const getUserBtn = document.getElementById('getUserButton');
const userCity = document.querySelector('#userCity');

async function getUserCity(url, name) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    const user = users.find(user => user.name === name);
    if (user) {
        userCity.textContent = `Місто користувача ${name}: ${user.address.city}`;
    } else {
        userCity.textContent = 'Користувача не знайдено';
    }
}

getUserBtn.addEventListener('click', () => {
    const name = userNameInput.value;
    getUserCity('https://jsonplaceholder.typicode.com/users', name);
});