const anchorLink = document.querySelector(".return__link");

document.addEventListener("scroll", () => {
  if (window.scrollY < 280) {
    anchorLink.style.visibility = "hidden";
  } else {
    anchorLink.style.visibility = "visible";
  }
});

// tester sans async puisque si async alors await dans la fonction 

const displayPhotographers = (data) => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (let photographer of data) {
    let photographerId = new Photographer(photographer);
    // console.log(photographerId.photographersIndexPage())
    content.innerHTML += photographerId.photographersIndexPage();
  }
};

const displayTag = (data) => {
  const tags = document.querySelectorAll(".photographer__tags__tag");
  // if (tags) {
    tags.forEach((tags) => {
      tags.addEventListener("click", () => {
        const tagLowerCase = tags.innerText.substring(1).toLowerCase();
        // console.log(sentence.toLowerCase());
        console.log(tagLowerCase);
        console.log(data);
        const filterPhotographe = data.filter((photographer) =>
          photographer.tags.includes(tagLowerCase)
        );
        console.log(filterPhotographe);
        displayPhotographers(filterPhotographe);
      });
    });
  // }
};

const init = async () => {
  const data = await fetchData();
  displayPhotographers(data.photographers);
  displayTag(data.photographers);
};
init();
