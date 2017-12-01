(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  const carImages = document.querySelectorAll(".data-ref"),
      modelName = document.querySelector(".modelName"),
      modelPrice = document.querySelector(".priceInfo"),
      modelDesc = document.querySelector(".modelDetails");


function changeText(e){
  objectIndex = carData[this.id];
  //console.log("from carImages");
  modelName.firstChild.nodeValue = objectIndex.name;
  modelDesc.firstChild.nodeValue = objectIndex.details;
  modelPrice.firstChild.nodeValue = objectIndex.price;

  //select all elements with active class
    const active = document.querySelectorAll(".focusMini");

      active.forEach(function(el){
      //for elements that are active, remove focusMini and add nonActive
        el.classList.remove('focusMini');
        el.classList.add('nonActive');
      })

      //remove nonActive and add focusMini class
      e.target.classList.remove('nonActive');
      e.target.classList.add('focusMini');
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
