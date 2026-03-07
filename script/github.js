const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function(){

    // remove active from all
   
    buttons.forEach(btn => {
      btn.classList.remove("bg-purple-600","text-white");
      btn.classList.add("bg-gray-50","text-black");
    });

    // add active to clicked
    this.classList.remove("bg-gray-50");
    this.classList.add("bg-purple-600","text-white");

  });
});