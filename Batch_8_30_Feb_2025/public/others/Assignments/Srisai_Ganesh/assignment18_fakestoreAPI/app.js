var loadFakeProducts = () => {
    axios.get('https://fakestoreapi.com/products/').then((result) => {
        console.log(result);
        var fakeInfo = result.data;
        loadFakeDataToGrid(fakeInfo);
        console.log(fakeInfo);
    }).catch((err) => {
        console.error("Error fetching fake products:", err);
    });
}

var loadFakeDataToGrid = (fakeInfo) => {
    console.log('Hello');
    for(var i = 0; i < fakeInfo.length; i++) {
        var trTag = $('<tr/>');
        var tdTag1 = $('<td/>').text(fakeInfo[i].id);
        trTag.append(tdTag1);

        var tdTag2 = $('<td/>').text(fakeInfo[i].title);
        trTag.append(tdTag2);

        var tdTag3 = $('<td/>').text(fakeInfo[i].price);
        trTag.append(tdTag3);

        var tdTag4 = $('<td/>').text(fakeInfo[i].description);
        trTag.append(tdTag4);

        var tdTag5 = $('<td/>').text(fakeInfo[i].category);
        trTag.append(tdTag5);

        var tdTag6 = $('<td/>');
        var imgTag = $('<img/>').attr('src', fakeInfo[i].image).css({ width: '50px', height: '50px' });
        tdTag6.append(imgTag);
        trTag.append(tdTag6);

        var tdTag7 = $('<td/>').text(fakeInfo[i].rating.rate);
        trTag.append(tdTag7);

        var tdTag8 = $('<td/>').text(fakeInfo[i].rating.count);
        trTag.append(tdTag8);

        $('tbody#productTable').append(trTag);
        console.log(trTag);
    }
}