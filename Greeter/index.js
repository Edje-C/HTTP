const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    if(req.query.name){
        res.send(`<!doctype>
        <head>
        <title>Greeter</title>
        </head>
        <body>
        <h1> Hello ${req.query.name}</h1>
        </body>
        </html>`)
    }else{
        res.send(`Please provide a name.`)
    }
})

app.listen(port, () => {
    console.log(`RPS app listening on port ${port}`)
})