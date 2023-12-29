//Login form complate
let karo = document.getElementById("karo");
karo.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemArr = [];
    itemArr.push([name, pass]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  } else {
    let itemarraystr = localStorage.getItem("itemjson");
    itemArr = JSON.parse(itemarraystr);
    itemArr.push([name, pass]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  }
});
