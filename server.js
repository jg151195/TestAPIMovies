const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.json());
const BASE_URL= 'https://api.themoviedb.org/3/';
const KEY = 'api_key=5a259b2b1f9bd6265a9190156db203c4';
const DISCOVER_URL = 'discover/movie?';
const SEARCH_URL = 'search/movie?';
const FULL_URL_DISCOVER = BASE_URL + DISCOVER_URL + KEY;
const FULL_URL_SEARCH = BASE_URL + SEARCH_URL + KEY;

app.get('/movie', async (req, res) => {
    const fetch_resp = await fetch(FULL_URL_DISCOVER);
    const data = await fetch_resp.json();
    res.send(data);
})


app.post('/findmovie', async(req,res)=>{
    console.log('got it');
    const request = req.body;
    console.log(request);
    const iquery = FULL_URL_SEARCH +'&query=' + request.textsearch;
    const response = await fetch(iquery);
    console.log(response);
    const data = await response.json();  
    console.log(data);
    res.send(data);
})

app.listen(1000, () => {
    console.log("Listening")
})