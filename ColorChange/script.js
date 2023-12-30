bot.addEventListener("click", blue);

function blue() {
  let count = document.getElementById("count").value;
  let bot = document.getElementById("bot");
  let a = count;
  if (a == "Almas") {
    document.getElementById("boot").style.backgroundColor = "red";
    document.getElementById("boot").innerHTML = "Hello Almas Jan";
  } else if (a == "Rustam") {
    document.getElementById("boot").style.backgroundColor = "blue";
    document.getElementById("boot").innerHTML = "Hello Rustam Jan";
  } else if (a == "Bunyanuddin") {
    document.getElementById("boot").style.backgroundColor = "black";
    document.getElementById("boot").innerHTML = "Hello Bunyanuddin Jan";
  } else if (a == "Farhad") {
    document.getElementById("boot").style.backgroundColor = "grey";
    document.getElementById("boot").innerHTML = "Hello Farhad Jan";
  } else if (a == "Nazerullah") {
    document.getElementById("boot").style.backgroundColor = "aqua";
    document.getElementById("boot").innerHTML = "Hello Nazerullah Jan";
  } else if (a == "Feroz") {
    document.getElementById("boot").style.backgroundColor = "tan";
    document.getElementById("boot").innerHTML = "Hello Feroz Jan";
  } else {
  }
}
