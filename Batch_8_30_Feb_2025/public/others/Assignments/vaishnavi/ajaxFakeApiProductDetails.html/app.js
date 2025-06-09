var loadProductDetails = () => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
        console.log(result);
        var productsInfo = result.data;
        loadDataToGrid(productsInfo);
        console.log(productsInfo);
    }).catch((err) => {
        console.log(err);
    });
}; 
    var loadDataToGrid = (productsInfo) => {
        for (var i = 0; i < productsInfo.length; i++) {
            var trtag = $('<tr/>');
    
            var tdId = $('<td/>').text(productsInfo[i].id);
            var tdTitle = $('<td/>').text(productsInfo[i].title);
            var tdPrice = $('<td/>').text(productsInfo[i].price);
            var tdCategory = $('<td/>').text(productsInfo[i].category);
            var tdRating = $('<td/>').text(productsInfo[i].rating);
            var tdDesc = $('<td/>').text(productsInfo[i].description);
            var tdImg = $('<td/>').text(productsInfo[i].image);
            var tdImg= $("<td/>").html(`<img src="${productsInfo[i].image}" width="150" height="150"/>`);

            trtag.append(tdId, tdTitle, tdPrice, tdDesc , tdCategory , tdRating , tdImg);
            $('tbody').append(trtag);
            console.log(trtag);
        }
    };
        
    