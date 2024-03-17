import axios from 'axios';

const hostName = 'http://192.168.1.183:3000/';

// Получение всех Отделений с сервера
async function example() {
    try {
        // Получение данных с сервера
        const response = await axios.get(hostName + '', {
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