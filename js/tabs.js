const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const tabBlocks = document.querySelectorAll(".design-block__img");
const tabHeadings = document.querySelectorAll(".design__title");

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabImages, dataValue);
    changeContent(tabDescriptions, dataValue);
    changeContent(tabBlocks, dataValue);
    changeContent(tabHeadings, dataValue);

    tabButtons.forEach((btn, index) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
        document.title = tabHeadings[index].innerText;
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
