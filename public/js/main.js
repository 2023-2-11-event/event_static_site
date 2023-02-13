window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("test").style.fontSize = "4em"
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", function (e) {
  let size =document.getElementById("test").style["fontSize"];
  console.log(size)
  if(size == "4em"){
    document.getElementById("test").style.fontSize = "8em"
  }

  else if(size == "8em"){
    document.getElementById("test").style.fontSize = "4em"
  }

    
  });
});
