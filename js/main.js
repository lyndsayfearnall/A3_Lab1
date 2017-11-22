(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImages = document.querySelectorAll(".data-ref"),
      modelName = document.querySelector(".modelName"),
      modelPrice = document.querySelector(".priceInfo"),
      modelDesc = document.querySelector(".modelDetails");


function changeText(){
  objectIndex = carData[this.id];
  //console.log("from carImages");
  modelName.firstChild.nodeValue = objectIndex.name;
  modelDesc.firstChild.nodeValue = objectIndex.details;
  modelPrice.firstChild.nodeValue = objectIndex.price;
}

for (var i = 0; i < carImages.length; i++){
  carImages[i].addEventListener('click', changeText);
}


})();

/**
 * 1. acces the text
 * 2. map current element in event function to data
 * 3. swapping innerHTML
 */
