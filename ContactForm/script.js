let Karo = document.getElementById("karo");
Karo.addEventListener("click", () => {
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  console.log("Submit karo");
  if (localStorage.getItem("itemjson") == null) {
    let itemArray = [];
    itemArray.push([Name, Email]);
    localStorage.setItem("itemjson", JSON.stringify(itemArray));
  } else {
    let itemArraystr = localStorage.getItem("itemjson");
    itemArray = JSON.parse(itemArraystr);
    itemArray.push([Name, Email]);
    localStorage.setItem("itemjson", JSON.stringify(itemArray));
  }
  alert("Form Submited Successfully...");
});
