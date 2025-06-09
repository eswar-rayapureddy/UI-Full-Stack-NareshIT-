var singleProductTemplate;
var addImagesToContainer = () => {
    var productList;
    axios.get('https://fakestoreapi.com/products').then((response) => {
        productList = response.data;
        console.log(productList);
        productList.forEach((element, index) => {
            console.log(element);
            if (index == 0) {
                element.firstSlideClass = 'active';
            }
            console.log(singleProductTemplate(element));
            $(".carousel-inner").append(singleProductTemplate(element));
        });
    });
} 

document.addEventListener("DOMContentLoaded", () => {
    singleProductTemplate = Handlebars.compile($("#productSingleSlideTemplate").html())
    addImagesToContainer();
});