var productDetails = {};
var readProductDetails = () => {

    
    productDetails.title = $("#p_title").val();
    productDetails.price = parseInt($("#p_price").val());
    productDetails.description = $("#p_desc").val();
    productDetails.category = $("#p_category").val();
    // productDetails.image = $("#p_image").val();
    productDetails.rating = {};
    productDetails.rating.rate = parseFloat($("#p_rating").val());

    axios.post('/add/new/product', productDetails).then((result) => {
        $("#msgBlock").text("Added successfly");
        $("#msgBlock").show();
        resetFields();
        
    }).catch((err) => {
        
    });
}

var resetFields = () => {
    $("#p_title").val('');
    $("#p_price").val('');
     $("#p_desc").val('');
     $("#p_category").val('');
     $("#p_image").val('');
     $("#p_rating").val('');
}

var uploadImage = () => {
    let uploadfile = $("input[name=prodImage]")[0].files[0]
    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    axios.post('/upload/resource', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    }).then((response) => {
         console.log(response);
         productDetails.image = response.data.file_path;
    }).error((error) => {
        // handle error
    })

}