  function goToAnchor(anchor) {
      var loc = document.location.toString().split('#')[0];
      document.location = loc + '#' + anchor;
      return false;
  }

  let email= document.getElementById("email");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  document.getElementById("order-action").onclick = function () {
     let hasError = false;
  
     [email, name, phone].forEach(item => {
         if (!item.value) {
             item.parentElement.style.background = "red";
             hasError = true;
         } else {
             item.parentElement.style.background = "";
         }
     });
  
     if (!hasError) {
         [email, name, phone].forEach(item => {
             item.value = "";
         });
         alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
     }
  }

  let buttons= document.getElementsByClassName("card-button");
for (let i =0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("contacts").scrollIntoView({behavior: "smooth"});
    }
}