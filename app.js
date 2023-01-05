document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    // If the clicked element is already open, close it. Otherwise, open it.
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.nextElementSibling.classList.remove("open");
    } else {
      // Close all accordion items
      document.querySelectorAll(".accordion__question").forEach((item) => {
        item.classList.remove("open");
        item.nextElementSibling.classList.remove("open");
      });

      item.classList.add("open");
      item.nextElementSibling.classList.add("open");
    }
  });
});
