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

const determineProducts = async (req, res) => {
    try{
        switch(req.body.category){
            case 'televisons':
                let range = req.body.range.split('-');
                let jumiaProducts = await priceComparisonEngine(range, scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/'));
                let kilimallProducts = await priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1255&aside=smart%20tv&gc_id=1255'));
    
                let televisionProducts = [...jumiaProducts, ...kilimallProducts];
                
                res.send(televisionProducts);
                break;
    
            case 'smart phones':
                let rangeP = req.body.range.split('-');
                let jumiaPhones = await priceComparisonEngine(rangeP, scrapeProductsJumia('https://www.jumia.co.ke/smartphones/'));
                let kilimallPhones = await priceComparisonEngine(rangeP, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074'));
    
                let phoneProducts = [...jumiaPhones, ...kilimallPhones];
                
                res.send(phoneProducts);
                break;
                
            case 'home theatre':
                let rangeT = req.body.range.split('-');
                let jumiaTheatre = await priceComparisonEngine(rangeT, scrapeProductsJumia('https://www.jumia.co.ke/home-theatre/'));
                let kilimallTheatre = await priceComparisonEngine(rangeT, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1256&aside=null&gc_id=1256'));
    
                let theatreProducts = [...jumiaTheatre, ...kilimallTheatre];
                
                res.send(theatreProducts);
                break;
                
            case 'printer':
                let rangePr = req.body.range.split('-');
                let jumiaPrinter = await priceComparisonEngine(rangePr, scrapeProductsJumia('https://www.jumia.co.ke/printers/'));
                let kilimallPrinter = await priceComparisonEngine(rangePr, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?q=printers'));
    
                let printerProducts = [...jumiaPrinter, ...kilimallPrinter];
                
                res.send(printerProducts);
                break;    
        }
    } catch(err) { console.log(err)}

}

app.post('/getProducts', determineProducts(req,res) );

 //scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/');

//scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074');

//scrapeProductsMasoko('https://www.masoko.com/all-categories/phones-tablets/mobile-phones')

//priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074'));
let port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});