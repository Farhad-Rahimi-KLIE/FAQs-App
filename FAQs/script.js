let faqs = document.querySelectorAll(".faq");
faqs.forEach((faqs) => {
  faqs.addEventListener("click", () => {
    faqs.classList.toggle("active");
  });
});
