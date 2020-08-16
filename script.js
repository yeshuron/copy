function getInputValue(){
  var a = `<span class="annotation-piece" tabindex="0">`+'<p class="annotation-piece">';
  var h = '<span tabindex="0"  class="annotation-piece--note">';
  document.getElementById('printbox').innerHTML = a + document.getElementById("highlight").value+"</span></p>"+ h+document.getElementById("anno").value+'</span>';
}
  
  //If you want to copyText from Element a + document.getElementById("highlight").value+"</span>"+'<br/>'+h+document.getElementById("anno").value+'</span>';
  function copyTextFromElement(elementID) {
    let element = document.getElementById(elementID).innerHTML; //select the element
    let elementText = element.stringContent; //get the text content from the element
    copyText(elementText); //use the copyText function below
  }
  
  //If you only want to put some Text in the Clipboard just use this function
  // and pass the string to copied as the argument.
  function copyText(text) {
    navigator.clipboard.writeString(text);
  }
  