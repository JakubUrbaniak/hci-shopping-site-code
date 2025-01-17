/*const validate = function(ev){
  if (html.id === "shipping-information-page") {
      let failure = []
      //for select statements
      let select = document.getElementById('shipping-options')
      //if it's the first option, output an error
      if (select.selectedIndex === 0) {
        failure.push({input:'shipping-options', msg:'Three Options Available'})
      }
    return failure;
  }
}

if (html.id === "personal-information-page") {
  const name = document.getElementById('full-name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  const form = document.getElementById('personal-information')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let error = []
    if (name.value === '') {
      error.push('Name is required')
    }

    if (phone.value.length <= 9 || phone.value.length > 12) {
      error.push("Not a Real Phone Number")
    }

    if (error.length > 0) {
      e.preventDefault()
      errorElement.innerText = error.join(', ')
    }
  })
}*/

var html = document.querySelector('html');
//create array of the quantity fields
var quantityFields = document.getElementsByClassName('cart-quantity');

//--------------------------------CART MANIPULATION------------------------------
if (html.id === 'shopping-page') {
  //Create array of all elements with class 'add-item-button'
  var addItemButtons = document.getElementsByClassName('add-item-button');
  //cycle through all elements in that array; create event listener for each
  for (var i =0; i < addItemButtons.length; i++){
    var button = addItemButtons[i];
	button.addEventListener('click', addQuantity);
  }
  //repeat of array creation/subsequent event listener creation; this time for removing items
  var removeItemButtons = document.getElementsByClassName('remove-button');
  for (var i=0; i < removeItemButtons.length; i++){
    var button = removeItemButtons[i];
	button.addEventListener('click', removeQuantity);
  }

  //event listeners for if the incrementers on the number field are used rather than buttons
  for (var i =0; i < quantityFields.length; i++){
    var field = quantityFields[i];
	field.addEventListener('change', updatePrice);
  }
}

function addQuantity(event){
  //buttonClicked is set to be the button that was clicked to call the function
  var buttonClicked = event.target;
  //matches the clicked item to its field; adds one to quantity of that field
  if(event.target.name == "addproduct1"){
    quantityFields[0].value++;
  }
  if(event.target.name == "addproduct2"){
    quantityFields[1].value++;
  }
  if(event.target.name == "addproduct3"){
    quantityFields[2].value++;
  }
  if(event.target.name == "addproduct4"){
    quantityFields[3].value++;
  }
  //call function to calculate price for new quantity
  updatePrice();
}
function removeQuantity(event){
  var buttonClicked = event.target;
  if(event.target.name == "removeproduct1" && quantityFields[0].value > 0){
    quantityFields[0].value--;
    //call function to calculate price for new quantity
	updatePrice();

  }
  if(event.target.name == "removeproduct2" && quantityFields[1].value > 0){
    quantityFields[1].value--;
	updatePrice();
  }
  if(event.target.name == "removeproduct3" && quantityFields[2].value > 0){
    quantityFields[2].value--;
	updatePrice();

  }
  if(event.target.name == "removeproduct4" && quantityFields[3].value > 0){
    quantityFields[3].value--;
    updatePrice();
  }
}

function updatePrice(event){
  var subtotal = (quantityFields[0].value * 13.99) + (quantityFields[1].value * 11.99) + (quantityFields[2].value * 3.99) + (quantityFields[3].value * 5.99);
  var totalTag = document.getElementById('total');
  totalTag.innerHTML = "Total: $" + subtotal;
}
