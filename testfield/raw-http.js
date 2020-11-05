const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=6bb668e0d2e0eeb6794a6494de4c35a5&query=40,-75&units=m`;

const request = http.request(url, response => {
    let data = '';
    response.on('data', chunk => {
        data += chunk.toString();
    });
    response.on('end', () => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    });
});

request.on('error', error => console.log(error));
request.end();