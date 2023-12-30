let first = document.querySelector(".first");
let iframe = document.querySelector("iframe");
let button = document.querySelector("button");
button.addEventListener("click", () => {
  //   console.log("hello world");
  let html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

first.addEventListener("keyup", () => {
  //   console.log("hello world");
  let html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});
