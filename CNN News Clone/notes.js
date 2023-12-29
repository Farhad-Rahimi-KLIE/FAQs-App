let submit = document.querySelector(".submit");
let Title = document.getElementById("title");
let desc = document.getElementById("description");
let noteElem = document.querySelector(".notes");
let notes = JSON.parse(localStorage.getItem("itemjson"));
// if (notes) {
//   notes.forEach((element) => {
//     addNote(element);
//   });
// }
submit.addEventListener("click", (e) => {
  e.preventDefault();
  addNote();
});

function addNote(obj) {
  let titleVal = Title.value;
  let descVal = desc.value;
  if (obj) {
    titleVal = obj.Title;
    descVal = obj.desc;
  }
  let card = document.createElement("div");
  card.classList.add("card");
  if (titleVal) {
    card.innerHTML = `
        <h3>${titleVal}</h3>
        <p>${descVal}</p>
        <button class="del">Delete</button>
        `;
    noteElem.appendChild(card);
    updatels();
  }
  let pak = card.querySelector(".del");
  pak.addEventListener("click", () => {
    card.remove();
    localStorage.clear();
  });
}
function updatels() {
  let card = document.querySelectorAll(".card");
  let arr = [];
  card.forEach((element) => {
    arr.push({
      Title: element.children[0].innerText,
      desc: element.children[1].innerText,
    });
  });
  localStorage.setItem("itemjson", JSON.stringify(arr));
}

// Now Initialize the + Button
let frk = document.querySelector(".frk");
let News = document.querySelector(".news");
frk.addEventListener("click", () => {
  console.log("ss")
  News.classList.add("bg_active");
});

News.addEventListener("dblclick", () => {
  News.classList.remove("bg-active");
});
