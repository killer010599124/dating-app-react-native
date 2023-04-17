
const express = require('express');
const Cors = require('cors');

// App Config

const app = express();
const port = process.env.port || 8001;

// midde ware
app.use(express.json())
app.use(Cors());

// DB config

//API Endpoint

app.get('/', (req, res) => res.status(200).send(" Programmers!!!"));

app.post('/api/tinder',(req, res) =>{
    const dbCard = req.body;
    
})

app.get('/api/tinder',(req, res) =>{
    
})

//Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`))
