const {  scrapeProductsKilimall, scrapeProductsJumia, scrapeProductsMasoko } = require('./lib/functions/scrapeProductDetails');
const {priceComparisonEngine} = require('./lib/functions/priceComparisonEngine');

let range = [10000, 12000];
 //scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/');

//scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074');

//scrapeProductsMasoko('https://www.masoko.com/all-categories/phones-tablets/mobile-phones')

priceComparisonEngine(range, scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074'));