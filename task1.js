// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 


const usersAPI = "https://jsonplaceholder.typicode.com/users";
const usersList = document.querySelector('.usersList');

async function getUsers(url, usersContainer) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    users.forEach(user => {
        usersContainer.innerHTML += `<li>${user.name}</li>`;
    })
}

getUsers(usersAPI, usersList);