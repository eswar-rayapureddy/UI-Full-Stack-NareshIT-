var moreDetailsTemplate = '';
axios.get("/templates/singleProdcut_moreDetails.htm").then((response) => {
    moreDetailsTemplate = Handlebars.compile(response.data);
});

document.addEventListener("DOMContentLoaded", () => {
     const urlParams = new URLSearchParams(location.search);

    var productId = urlParams.get('id');
    var jwtToken = urlParams.get("jwtToken");

    loadProductsToPage({id: parseInt(productId)}, jwtToken)

})

var loadProductsToPage = (userQuery = {}, jwtToken) => {
    console.log(userQuery);
    
    
    axios.post('/get/productDetails', userQuery, { headers: {"Authorization" : `Bearer ${jwtToken}`} }).then((result) => {
        console.log(result.data);
        var productData = result.data[0];
        console.log(productData);
        $('main').append(moreDetailsTemplate(productData))

    }).catch((err) => {
        
    });
}  