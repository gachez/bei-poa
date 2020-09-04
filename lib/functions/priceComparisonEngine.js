//this function takes in the price range and products prices and returns
// a filtered response

const priceComparisonEngine = async (range, products) => {
    try{
    let prods = await products
    
    let filtered = prods.filter( product => product.price > parseInt(range[0]) && product.price < parseInt(range[1]));

    console.log(`HERE IS THE FILTERED ARRAY OF PRODUCTS`);
    console.log(filtered);
    return filtered;
    } catch (err){ console.log(err) }
};


module.exports.priceComparisonEngine = priceComparisonEngine;
