const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    res.send('Home');
})

app.get('/about', (rq, res) => {
    res.send('About');
})

app.listen(5000, () => {
    console.log('the server is listening on the port 5000...')
})