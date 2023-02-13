window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("doraemonn").style.fontSize = "5em"
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("mousemove", function (e) {
    let size = document.getElementById("doraemonn").style["fontSize"];
    if(size == "5em"){
      document.getElementById("doraemonn").style.fontSize = "8em"
    }
    else if(size == "8em"){
      document.getElementById("doraemonn").style.fontSize = "5em"
    }
  });
});
