var getProductDetails = () =>{
    var dataUrl = "https://fakestoreapi.com/products";
    // fetch(dataUrl).then((response) => response.json()).then((result) =>{
    //     console.log("success");
    //     console.log(result);
    //     document.querySelector("span").innerText = result[0].title;
    // }).catch(() => {
    //     console.log("error while hittin api")
    //     })

    axios.get("https://fakestoreapi.com/products", {params: {}}).then((result) => {
        console.log("successfully communication happened");
        console.log(result);
        var productsInfo = result.data;
        loadDataToTable(productsInfo);
        console.log(productsInfo)
    }).catch((err) =>{
        console.log("error while communicating");
    });    
}

var loadDataToTable = (productsInfo) =>{
    for (var i = 0 ; i < productsInfo.length; i++){
        var trtag = $("<tr/>");
        var tdTag1 = $("<td/>").text(productsInfo[i].id);
        trtag.append(tdTag1)

        var tdTag1 = $("<td/>").text(productsInfo[i].title);
        trtag.append(tdTag1)

        var tdTag2 = $("<td/>").text(productsInfo[i].category);
        trtag.append(tdTag2)

        var tdTag3 = $("<td/>").text(productsInfo[i].description);
        trtag.append(tdTag3)

        var tdTag4 = $("<td/>").html(`<img src="${productsInfo[i].image}" width="100" height="100"/>`);
        trtag.append(tdTag4)

        var tdTag5 = $("<td/>").text(productsInfo[i].price);
        trtag.append(tdTag5)

        var tdTag6 = $("<td/>").text(productsInfo[i].rating);
        trtag.append(tdTag6)

        $("tbody").append(trtag);
        console.log(trtag);
    }
}