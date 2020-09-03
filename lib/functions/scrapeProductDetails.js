 
const puppeteer = require('puppeteer');

const scrapeProductsJumia = async (categorySelected) => {
    try{
        console.log('function called');
        const browser = await puppeteer.launch({ headless: true  });
          const page = await browser.newPage();
      
           // Configure the navigation timeout
           await page.setDefaultNavigationTimeout(0); 
      
          await page.goto(categorySelected);
          console.log('page accessed...');
      
              // generate result for the current page
          const result = await page.evaluate(() => {
             let data = [];  
             //elements that are meant to work
             for (let i = 0; i < Array.from(document.getElementsByClassName('c-prd')).length; i++){
              let linkToShop = document.querySelectorAll('a.core')[i].getAttribute("href");
              let img = document.querySelectorAll('.img-c img.img')[i].getAttribute("src");
              let title = document.querySelectorAll(".info h3")[i].textContent
              let price = document.querySelectorAll('.prc')[i].textContent.slice(4).replace(',', '')
              
              data.push({
                linkToShop,
                img,
                title,
                price
              })
             } 
            
             return data;  
          })
          
           
          browser.close();
          console.log(result);
          return result;      
    } catch(err) { console.log(err)}
  
};


const scrapeProductsKilimall = async (categorySelected) => {
    try{
        console.log('function called');
        const browser = await puppeteer.launch({ headless: true  });
          const page = await browser.newPage();
      
           // Configure the navigation timeout
           await page.setDefaultNavigationTimeout(0); 
      
          await page.goto(categorySelected);
          console.log('page accessed...');
      
       
              // generate result for the current page
          const result = await page.evaluate(() => {
            let data = []; 
             //elements that are meant to work
             for (let i = 0; i < Array.from(document.getElementsByClassName('el-col-6')).length; i++){
              let linkToShop = document.querySelectorAll('a.showHand')[i].getAttribute("href");
              let img = document.querySelectorAll('.imgClass')[i].getAttribute("src");
              let title = document.querySelectorAll(".wordwrap")[i].textContent
              let price = parseInt(document.querySelectorAll('.wordwrap-price span')[i].textContent.slice(4).replace(',', ''))
              
              data.push({
                linkToShop,
                img,
                title,
                price
              })
             } 
            
             return data;  
          })
          
           
          browser.close();
          return result;      
    } catch(err) { console.log(err)}
  
};


const scrapeProductsMasoko = async (categorySelected) => {
    try{
        console.log('function called');
        const browser = await puppeteer.launch({ headless: true  });
          const page = await browser.newPage();
      
           // Configure the navigation timeout
           await page.setDefaultNavigationTimeout(0); 
      
          await page.goto(categorySelected);
          console.log('page accessed...');
      
              // generate result for the current page
          const result = await page.evaluate(() => {
             let data = [];  
             //elements that are meant to work
             for (let i = 0; i < Array.from(document.getElementsByClassName('MuiCardContent-root')).length; i++){
              let linkToShop = document.querySelectorAll('div.MuiBox-root a')[i].getAttribute('href');
              let img = document.querySelectorAll('div.MuiBox-root a img')[i].getAttribute("src");
              let title = document.querySelectorAll("div.MuiBox-root.jss882.jss870 a")[i].textContent;
              let price = document.querySelectorAll('p.MuiTypography-root.jss890.false.MuiTypography-body1')[i].textContent;
              
              data.push({
                linkToShop,
                img,
                title,
                price
              })
             } 
            
             return data;  
          });
          
          browser.close();
          console.log(result);
          return result;      
    } catch(err) { console.log(err)}
  
};


module.exports.scrapeProductsJumia = scrapeProductsJumia;

module.exports.scrapeProductsKilimall = scrapeProductsKilimall;

module.exports.scrapeProductsMasoko = scrapeProductsMasoko;