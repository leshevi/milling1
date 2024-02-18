$(document).ready(function() {
    $(".feedback-cards").slick({
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1090,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
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