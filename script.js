console.log("привіт зі світу K-pop!");

let filters = document.querySelectorAll(".filters button");
let albumRows = document.querySelectorAll(".albums1 .row");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    let targetCategory = button.getAttribute("data-target-category");

    filters.forEach((btn) => {
      btn.classList.remove("btn-success");
      btn.classList.add("btn-light");
    });
    button.classList.remove("btn-light");
    button.classList.add("btn-success");

    albumRows.forEach((row) => {
      if (row.getAttribute("data-category") === targetCategory || targetCategory === "All") {
        // змінити стилі цього рядка, щоб він був видимим style.display = "flex";
        row.style.display = "flex";
      } else {
        // тут всі інші випадки якщо рядок не співпає з фільтром, щоб він був прихованим style.display = "none";
        row.style.display = "none";
      }
    });
  });
});
