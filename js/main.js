var iconMS = document.getElementById("iconMS");
iconMS.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconMS.src = ""
  } else{
    iconMS.src = ""
  }
}
