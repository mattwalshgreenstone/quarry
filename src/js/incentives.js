
window.onload = function () {




  //========================================================
  //Click to copy email
  //========================================================
    
  var email = document.getElementById("email");
  const textArea = document.createElement('textarea');

  email.addEventListener("click", function() {
    //Get text value
    var emailtext = email.textContent;

    //create, and then delete a textarea box so the text can be copied to clipboard
    textArea.value = emailtext;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);



    // el.select();
    selectText();


    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Email copied to clipboard");

    
  });
    

  


  function isOS() {
      return navigator.userAgent.match(/ipad|iphone/i);
  }


  function selectText() {
       var range,
           selection;

       if (isOS()) {
           range = document.createRange();
           range.selectNodeContents(textArea);
           selection = window.getSelection();
           selection.removeAllRanges();
           selection.addRange(range);
           textArea.setSelectionRange(0, 999999);
       } else {
           textArea.select();
       }
   }



//========================================================
// incentives open / close
//========================================================
  
var expandLink = document.getElementById("expand-incentives");
var incentiveWrap = document.getElementById("bands-wrap");
var closeIncentives = document.getElementById("close-btn");

expandLink.addEventListener("click", function() {
    jsOpen();
});

closeIncentives.addEventListener("click", function() {
  jsOpen();
});



var jsOpen = function() {
  if (incentiveWrap.classList.contains('js-open')) {
    
      incentiveWrap.classList.remove('js-open');
   } else {
      incentiveWrap.classList.add('js-open');
   }
}







  






      
};

