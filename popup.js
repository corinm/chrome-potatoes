const weightRadio = document.getElementById('weight');
const quantityRadio = document.getElementById('quantity');

// chrome.storage.sync.get('conversion', (data) => {
  //  console.log({ data })
   // conversion.style.backgroundColor = data.color;
   // conversion.setAttribute('value', data.color);
// });

weightRadio.onchange = (element) => {
  const isChecked = element.target.checked
  
  if (isChecked) {
    // Change to weight
    console.log('Weight')
  }

  // let color = element.target.value;
  // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    // chrome.tabs.executeScript(tabs[0].id, {code: 'document.body.style.backgroundColor = "' + color + '";'});
  // });
};

quantityRadio.onchange = (element) => {
  const isChecked = element.target.checked
  
  if (isChecked) {
    // Change to quantity
    console.log('Quantity')
  }

  // let color = element.target.value;
  // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    // chrome.tabs.executeScript(tabs[0].id, {code: 'document.body.style.backgroundColor = "' + color + '";'});
  // });
};
