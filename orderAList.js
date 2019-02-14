
let orderButton = document.querySelector("#orderButton");
orderButton.addEventListener("click", orderClicked);

function orderClicked(){
  orderList();
}

function orderList(){
  let unorderedList = getUnorderedList();

  unorderedList = unorderedList.split("\n");

  unorderedList = unorderedList.map((unorderedItem) => {
    return unorderedItem.trim();
  });

  unorderedList.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  let orderedListString = createOrderedListString(unorderedList);

  document.querySelector("#orderedListArea").innerHTML = orderedListString;
}

function getUnorderedList(){
  let listInput = document.querySelector("#listInput");
  return listInput.value;
}

function createOrderedListString(orderedList){
  let orderedString = "";

  orderedString = orderedList.reduce((total, value) => {
      return total + "<br>" + value;
  });

  return orderedString;
}
