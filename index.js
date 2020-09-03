const {  scrapeProductsKilimall, scrapeProductsJumia, scrapeProductsMasoko } = require('./lib/functions/scrapeProductDetails');

 //scrapeProductsJumia('https://www.jumia.co.ke/mlp-smart-tvs/');

scrapeProductsKilimall('https://www.kilimall.co.ke/new/commoditysearch?c=1074&aside=null&gc_id=1074');

//scrapeProductsMasoko('https://www.masoko.com/all-categories/phones-tablets/mobile-phones')