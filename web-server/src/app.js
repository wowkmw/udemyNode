const express = require('express');

const app = express();
// app.com
// app.com/help

app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'jim',
        age: 29
    }, {
        name: 'jim',
        age: 29
    }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Brisbane',
        weather: 'overcast'
    });
});

app.listen(3000, () => console.log('server is up on port 3000...'));