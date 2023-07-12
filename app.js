const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([{name: 'Gerald'},{name: 'Mumo'}])
})


app.listen(5000, () =>{
    console.log('Serve is listening on port 5000....');
})