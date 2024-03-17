import axios from 'axios';

const hostName = 'https://hex-buckshot.online:443';

// Получение всех Отделений с сервера
async function example() {
    try {
        // Получение данных с сервера
        console.log('выполнение ');
        const response = await axios.get(hostName + '/', {
            headers: {
                'Content-Type': 'application/www-form-urlencoded',
            },
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

export {
    example,
}