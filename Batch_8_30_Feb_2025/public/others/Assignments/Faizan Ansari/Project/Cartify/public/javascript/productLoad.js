var singleProductTemplate;

axios.get('templates/singleProductTmplt.htm').then((response) => {
    // console.log(response.data);
    singleProductTemplate = Handlebars.compile(response.data);
})

var loadProductsToPage = () => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
        console.log(result.data);
        var productData = result.data;
        productData.forEach((product, index) => {
            product.title = product.title.substr(0, 50); 
            product.description = product.description.substr(0, 80) + ' ...'
            product.index = index; 
            
            $("#productDetailsContainer").append(singleProductTemplate(product));

            var ratingContainer = `#rating_${index}`
            addRatingStarsToContainer(product.rating.rate, ratingContainer);
    });
    }).catch((error) => {
        console.log(error);
    });
}