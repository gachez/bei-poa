const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {  scrapeProductsKilimall, scrapeProductsJumia, scrapeProductsMasoko } = require('./lib/functions/scrapeProductDetails');
const { priceComparisonEngine } = require('./lib/functions/priceComparisonEngine');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let range = [10000, 12000];

app.get('/', (req,res) => {
    res.send('Hello world! This is Bei Poa');
});

app.post('/getProducts', async (req,res) => {
    switch(req.body.category){
        case 'televisons':
            let range = req.body.range.split('-');
            let jumiaProducts = await priceComparisonEngine(range, scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/'));
            let kilimallProducts = await priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1255&aside=smart%20tv&gc_id=1255'));

            let televisionProducts = [...jumiaProducts, ...kilimallProducts];
            
            res.send(televisionProducts);
            break;

        case 'smart phones':
            console.log('smart phones');
            break;
            
        case 'fridge':
            console.log('fridges');
            break;
            
        case 'sofas':
            console.log('sofas');
            break;    
    }
});

 //scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/');

//scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074');

//scrapeProductsMasoko('https://www.masoko.com/all-categories/phones-tablets/mobile-phones')

//priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074'));
let port = 3300;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});