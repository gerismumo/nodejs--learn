const express = require('express');
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1> Home page</h1> <a href="/api/products">products</a>')
})
app.get('/api',(req, res) =>{
    const newProducts = products.map((product) => {
        const{userId, id, title, body} = product;
        return {userId, id,title,body}
    })
    res.json(newProducts);
} )


app.listen(5000, () =>{
    console.log('Serve is listening on port 5000....');
})