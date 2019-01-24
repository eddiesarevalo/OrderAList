
var orderButton = document.querySelector("#orderButton");
orderButton.addEventListener("click", orderClicked);

function orderClicked(){
  orderList();
}

function orderList(){
  var unorderedList = getUnorderedList();

  unorderedList = unorderedList.split("\n");

  for (var i = 0; i < unorderedList.length; i++) {
    unorderedList[i] = unorderedList[i].trim();
  }

  unorderedList.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  var orderedListString = createOrderedListString(unorderedList);

  document.querySelector("#orderedListArea").innerHTML = orderedListString;
}

function getUnorderedList(){
  var listInput = document.querySelector("#listInput");
  return listInput.value;
}

function createOrderedListString(orderedList){
  var orderedString = "";

  for (var i = 0; i < orderedList.length; i++) {

    if(i === 0){
      orderedString = orderedString + orderedList[i];
    }
    else{
      orderedString = orderedString + "<br>" + orderedList[i];
    }

  }

  return orderedString;
}
