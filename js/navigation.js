  
  // Declare and initialize btnClickMenu
  const btnClickMenu = document.querySelector(".clickOpen");
  
  // listen btnClickMenu with callback function
  btnClickMenu.addEventListener("click", () => {
    editNav();
  });
  
  // function editNav
  function editNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }