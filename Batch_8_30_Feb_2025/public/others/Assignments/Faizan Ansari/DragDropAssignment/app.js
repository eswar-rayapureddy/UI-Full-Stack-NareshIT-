var productId;
var productClass;

var dragIsStarted = (event) => {
    console.log("Image is dragged");
    productClass = event.target.getAttribute('class') 
    console.log(productClass);
    productId = "#" + event.target.getAttribute('id')
    console.log(productId);
} 

var imageDragging = (event) =>{
    event.preventDefault();   // * mandatory * //
    console.log("Image is dragging over the container");
    console.log(event);

}

var imageDropped = (event) => {
    event.preventDefault();
    console.log("Image is dropped");
    console.log(event.target.getAttribute('id'));
    
    if(event.target.getAttribute('id') == productClass){
        event.target.append(document.querySelector(productId));
    }
}
    
