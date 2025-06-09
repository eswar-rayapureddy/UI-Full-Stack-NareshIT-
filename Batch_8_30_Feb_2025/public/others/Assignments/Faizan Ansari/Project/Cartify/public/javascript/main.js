document.addEventListener("DOMContentLoaded", () => {
    addCapthcaText();
    loadSelectedPage('onLoad');
});

var addCapthcaText = () => {
    var captchaText = generateCaptchaText('LNULN');
    document.querySelector(".captchaBlock").innerText = captchaText;
}

var loadSelectedPage = (pageType) => {
    var templateUrl = ''
    switch (pageType) {
        case "onLoad":
            templateUrl = 'templates/onload.htm' 
            break;
        case "productDetails":
            templateUrl = 'templates/productDetails.htm'
            break; 
    }
    axios.get(templateUrl).then((response) => {
        console.log(response);
        $('main').html(response.data);

        if(pageType == "productDetails"){
            loadProductsToPage();
        }
    })
}

