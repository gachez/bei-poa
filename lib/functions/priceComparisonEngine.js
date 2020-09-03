//this function takes in the price range and products prices and returns
// a filtered response
const {  scrapeProductsKilimall, scrapeProductsJumia, scrapeProductsMasoko } = require('../functions/scrapeProductDetails');

let range = [10000, 20000];

const priceComparisonEngine = async (range, products) => {

    let prods = await products
    
    let filtered = prods.filter( product => product.price > range[0] && product.price < range[1]);

    console.log(`HERE IS THE FILTERED ARRAY OF PRODUCTS`);
    console.log(filtered);
    return filtered;
  
}

priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074'));