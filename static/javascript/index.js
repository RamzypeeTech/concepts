import { collections } from "./constants.js";

const filterButtons = document.querySelectorAll(".bellaBtn .bellaChild button");
const collectionContainer = document.querySelector(".bellaMini");

function generateHtml(buttonCategory) {
  collectionContainer.innerHTML = "";

  collections.forEach(({ name, category, image }) => {
    if (category === buttonCategory) {
      const html = `<div class="cardCon">
                      <div class="bellaCard">
                          <img src="/static/${image}" alt="${name}" />
                      </div>
                      <div class="textbar">
                          <p class="gown">${name}</p>
                          <p class="sm-gown">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>`;
      collectionContainer.innerHTML += html;
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { category } = button.dataset;
    generateHtml(category);
    removePreviousActiveButton();
    button.classList.add("gwBtn");
  });
});

function removePreviousActiveButton() {
  filterButtons.forEach((btn) => btn.classList.remove("gwBtn"));
}

generateHtml("gowns");
