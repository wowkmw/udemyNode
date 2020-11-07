const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Jim Kuo'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jim Kuo'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Brisbane',
        weather: 'overcast'
    });
});

app.listen(3000, () => console.log('server is up on port 3000...'));