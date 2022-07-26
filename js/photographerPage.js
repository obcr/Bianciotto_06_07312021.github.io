// Pour Afficher le bon Photographe
const getId = () => {
  // recuperation de la chaine de requête dans son url
  const queryString_url_id = window.location.search;
  // console.log(queryString_url_id);

  // pour extraire l'id
  const urlSearchParams = new URLSearchParams(queryString_url_id);
  // console.log(urlSearchParams);

  const leId = urlSearchParams.get("id");
  // console.log(leId);
  return leId;
};

// Fonction updateMediaGalery recupere images
// les affiches et les mets a jour
const updateMediaGalery = (imagesDuPhotographe) => {
  // console.log qui affiche update de images !
  // console.log('updateMediaGalery');
  console.log(imagesDuPhotographe);
  const imageArea = document.getElementById("photographer_media");
  // efface le contenu precedent
  imageArea.innerHTML = "";
  // for (let newimagesDuPhotographe of imagesDuPhotographe) { 1 er facon
  //   for (let i=0; i<imagesDuPhotographe.length; i++) { 2 eme facon
  imagesDuPhotographe.forEach((image) => {
    let createImageHtml = new MediaFactory(image);
    imageArea.innerHTML += createImageHtml.photographersIndexPage();
  });
  initSlider(imagesDuPhotographe);
};

// Fonction addEventDiapo
const addEventDiapo = () => {
  const container = document.querySelector(".container");
  const masquePage = document.querySelector(".masquePage");
  const imageSlider = document.querySelectorAll(".diapo");
  const imageArea = document.getElementById("photographer_media");
  const masque = document.querySelector(".masque");
  const slider = document.querySelector(".slider-content");
  const sliderBox = document.querySelector(".slider_box");

  let index;

  // console.log("imageSlider", imageSlider);
  imageSlider.forEach((slide) => {
    imageSlider.innerHTML = " ";
    slide.addEventListener("click", () => {
      moveSliderClavier();
      let src = slide.getAttribute("src");
      // console.log("attribut", src);
      // console.log(slide, "slide");
      container.style.display = "flex";
      masquePage.style.display = "none";
      imageArea.style.display = "none";
      masque.style.display = "block";
      sliderBox.style.display = "flex";
      slider.style.display = "flex";
      const diapoSlider = document.querySelectorAll(".diapoSlider");
      for (let i = 0; i < diapoSlider.length; i++) {
        if (src === diapoSlider[i].getAttribute("src")) {
          // console.log("diapoSlider", diapoSlider[i].getAttribute("src"));
          // console.log("srcTest", i);
          if (diapoSlider[i].getAttribute("src").includes("mp4")) {
            diapoSlider[i].parentElement.parentElement.classList.toggle(
              "masque"
            );
          } else {
            diapoSlider[i].parentElement.classList.toggle("masque");
          }
          index = i;
        }
      }
    });
    slide.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        moveSliderClavier();
        let src = slide.getAttribute("src");
        // console.log("attribut", src);
        // console.log(slide, "slide");
        container.style.display = "flex";
        masquePage.style.display = "none";
        imageArea.style.display = "none";
        masque.style.display = "block";
        sliderBox.style.display = "flex";
        slider.style.display = "block";
        const diapoSlider = document.querySelectorAll(".diapoSlider");
        for (let i = 0; i < diapoSlider.length; i++) {
          if (src === diapoSlider[i].getAttribute("src")) {
            // console.log("diapoSlider", diapoSlider[i].getAttribute("src"));
            // console.log("srcTest", i);
            if (diapoSlider[i].getAttribute("src").includes("mp4")) {
              diapoSlider[i].parentElement.parentElement.classList.toggle(
                "masque"
              );
            } else {
              diapoSlider[i].parentElement.classList.toggle("masque");
            }
            index = i;
          }
        }
      }
    });
  });
  // console.trace("AddEventDiapo");
};

// Fonction initSlider cree les image et le cache
const initSlider = (images) => {
  const sliderBox = document.querySelector(".slider_box");
  const slider = document.querySelector(".slider-content");
  slider.innerHTML = " ";
  images.forEach((image) => {
    let createImageSliderHtml = new MediaFactory(image);
    slider.innerHTML += createImageSliderHtml.renderSlide();
    slider.style.display = "none";
    sliderBox.style.display = "none";
  });
};

// Fonction closeSlider referme le slider
const closeSlider = () => {
  const cross = document.querySelector(".fa-times");
  const container = document.querySelector(".container");
  const masquePage = document.querySelector(".masquePage");
  const imageArea = document.getElementById("photographer_media");

  cross.addEventListener("click", () => {
    const figureSlider = document.querySelectorAll(".figureSlider");
    // console.log("insideaddevent")
    figureSlider.forEach((figureSlide) => {
      figureSlide.classList.add("masque");
      // console.log("toto");
      // console.log(figureSlide);
    });
    container.style.display = "none";
    masquePage.style.display = "block";
    imageArea.style.display = "flex";
    removeEListener();
    console.log("closeslider");
  });
  // console.trace("closeslider");
};

// Fonction closeSlider referme le slider avec ESC
const closeSliderEsc = () => {
  // const cross = document.querySelector(".fa-times");
  const container = document.querySelector(".container");
  const masquePage = document.querySelector(".masquePage");
  const imageArea = document.getElementById("photographer_media");
  const figureSlider = document.querySelectorAll(".figureSlider");

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      console.log("j ai click esc");
      const figureSlider = document.querySelectorAll(".figureSlider");
      // console.log("insideaddevent")
      figureSlider.forEach((figureSlide) => {
        figureSlide.classList.add("masque");
        // console.log("toto");
        // console.log(figureSlide);
      });
      container.style.display = "none";
      masquePage.style.display = "block";
      imageArea.style.display = "flex";
      removeEListener();
      console.log("closeslider");
    }
  });
};

// Fonction moveSlider parcour le slider
function moveSlider() {
  const items = document.querySelectorAll(".diapoSlider");
  const nbSlide = items.length;
  const suivant = document.getElementById("next");
  const precedent = document.getElementById("previous");
  // const suivantClavier = document.getElementById("next");
  // const precedentClavier = document.getElementById("previous");
  suivant.addEventListener("click", () => {
    const figureSlider = document.querySelectorAll(".figureSlider");
    let index;
    for (let i = 0; i < figureSlider.length; i++) {
      // console.log("figureSlider", figureSlider[i]);
      // console.log(figureSlider[i].classList.contains("masque"));
      if (figureSlider[i].classList.contains("masque") == false) {
        index = i;
      }
    }
    // masque l image affiché
    figureSlider[index].classList.toggle("masque");
    if (index < nbSlide - 1) {
      // affiche la prochaine image
      figureSlider[index + 1].classList.toggle("masque");
    } else {
      // affiche la premiere image du tableau
      figureSlider[0].classList.toggle("masque");
    }
    // console.log("index+", index);
  });
  precedent.addEventListener("click", () => {
    const figureSlider = document.querySelectorAll(".figureSlider");
    let index;
    for (let i = 0; i < figureSlider.length; i++) {
      // console.log("figureSlider", figureSlider[i]);
      // console.log(figureSlider[i].classList.contains("masque"));
      if (figureSlider[i].classList.contains("masque") == false) {
        index = i;
      }
    }
    // console.log("index-", index);
    figureSlider[index].classList.toggle("masque");
    if (index > 0) {
      // affiche l image precedente
      figureSlider[index - 1].classList.toggle("masque");
    } else {
      // affiche la premiere image du tableau
      figureSlider[nbSlide - 1].classList.toggle("masque");
    }
    // console.log("index", index);
  });
  // console.trace("moveSlider");
}
// Fonction Evenement au clavier
const eventClavier = (e) => {
  const items = document.querySelectorAll(".diapoSlider");
  const nbSlide = items.length;

  if (e.key == "ArrowLeft") {
    console.log("j ai click Fleche G");
    const figureSlider = document.querySelectorAll(".figureSlider");
    let index;
    for (let i = 0; i < figureSlider.length; i++) {
      // console.log("figureSlider", figureSlider[i]);
      // console.log(figureSlider[i].classList.contains("masque"));
      if (figureSlider[i].classList.contains("masque") == false) {
        index = i;
      }
    }
    // console.log("index-", index);
    figureSlider[index].classList.toggle("masque");
    if (index > 0) {
      // affiche l image precedente
      figureSlider[index - 1].classList.toggle("masque");
    } else {
      // affiche la premiere image du tableau
      figureSlider[nbSlide - 1].classList.toggle("masque");
    }
    // console.log("index", index);
  } else if (e.key == "ArrowRight") {
    console.log("j ai click Fleche D");
    const figureSlider = document.querySelectorAll(".figureSlider");
    let index;
    for (let i = 0; i < figureSlider.length; i++) {
      // console.log("figureSlider", figureSlider[i]);
      // console.log(figureSlider[i].classList.contains("masque"));
      if (figureSlider[i].classList.contains("masque") == false) {
        index = i;
      }
    }
    // masque l image affiché
    figureSlider[index].classList.toggle("masque");
    if (index < nbSlide - 1) {
      // affiche la prochaine image
      figureSlider[index + 1].classList.toggle("masque");
    } else {
      // affiche la premiere image du tableau
      figureSlider[0].classList.toggle("masque");
    }
    // console.log("index+", index);
  }
};
// Fonction moveSlider parcour le slider avec Evenement au clavier
const moveSliderClavier = () => {
  console.log("movesliderclavier");
  document.addEventListener("keyup", eventClavier);
};

const removeEListener = () => {
  document.removeEventListener("keyup", eventClavier);
  console.log("removelist");
};

// Ouvrir la DropDown
function openDropdown() {
  const dropdownEl = document.querySelector(".dropdown-el");
  dropdownEl.addEventListener("click", (e) => {
    dropdownEl.classList.toggle("expanded");
  });
}

// Fonction displayPhotographersMedia avec code selection tri test for each
function displayPhotographersMedia(dataMedia, toto) {
  const mediaSelect = dataMedia.filter((media) => media.photographerId == toto);
  const inputs = document.querySelectorAll("label");
  updateMediaGalery(mediaSelect);
  inputs.forEach((input) => {
    input.addEventListener("click", (event) => {
      // console.log(event);
      // console.log(event.target);
      const value = event.target.getAttribute("for");
      // console.log(value);
      // console.log("testchange");
      // console.log(event);
      // filterByOption(mediaSelect, event.target.value);
      const mediaTrie = filterByOption(mediaSelect, value);
      updateMediaGalery(mediaTrie);
      addEventDiapo();
      const label = document.querySelector(".label");
      label.innerHTML = value;
      addLikes();
    });
    addEventDiapo();
  });
}

// Fonction filterByOption
const filterByOption = (mediaSelect, filtre) => {
  // console.log(filtre);
  switch (filtre) {
    case "Popularité":
      // console.log("trie par popularité");
      // console.log(mediaSelect);
      return mediaSelect.sort(function (a, b) {
        return b.likes - a.likes;
      });
      break;
    case "Titre":
      // console.log("trie par titre");
      // console.log(mediaSelect);
      return mediaSelect.sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
      });
      break;
    case "Date":
      // console.log("trie par date");
      // console.log(mediaSelect);
      return mediaSelect.sort(function (a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
      });
      break;
  }
};

// Fonction addLikes Ajoute les likes
function addLikes() {
  // Sélectionner des éléments
  const mediaLikes = document.querySelectorAll(".mediaLikes");
  const likesWidget = document.querySelector("#likes-widget");
  // console.log("click coeur", mediaLikes);
  // Ajouter un événement de clic pour chaque icône de cœur
  mediaLikes.forEach((element) => {
    element.addEventListener("click", () => {
      // Stocker la valeur du compteur dans une variable COUNT
      let count = parseInt(element.children[0].innerHTML);
      // parseInt element.children[0] [0] = renvoie le premier element enfant de la div [1] = renvoie le deuxieme element enfant de la div
      // <div class="mediaLikes" data-likes="false">
      //   1er element ENFANT <span id="counter" data-id="${this.id}">${this.likes}</span>
      //   2eme element ENFANT <span id="heart" class=" "><i tabindex="0" class="heart fas fa-heart" data-id="${this.id}"></i></span>
      // </div>
      // 1. On vérifie si le cœur est cliqué
      element.classList.toggle("clicked");
      // console.log("click coeur ok", element);
      // 2. Si on clique dessus, on incrémente le compteur, sinon on décrémente-le
      if (element.classList.contains("clicked")) {
        element.children[0].innerHTML = ++count;
        totalLikesMediaPhotographer();
      } else {
        element.children[0].innerHTML = --count;
        totalLikesMediaPhotographer();
      }
    });
  });
}

// Fonction totalLikesMediaPhotographer
// Calcul le total des likes de la page et affiche le total dans la stickyBox
const totalLikesMediaPhotographer = () => {
  let counters = 0;
  const counter = document.querySelectorAll(".counter");
  // 1 on pointe l element
  // console.log("counter", counter);
  // 2 on verifie l element pointe
  // TIPS 9 x sur 10 quand il y a un querySelectorAll il y aura un forEach
  counter.forEach((element) => {
    // console.log(element);
    // 4 on interroge l elements pour le connaitre
    counters += parseInt(element.textContent);
    // 5 on rajoute le span element transforme en parsInt a counters
  });
  const likesWidget = document.querySelector("#likes-widget");
  // 6 on pointe l element
  likesWidget.innerHTML = counters;
  // 7 on injecte counters dans l element pointe
  console.log(counters);
};

// Fonction open modal
const openModal = () => {
  const modalBtn = document.querySelector(".button");
  // console.log("openModal", modalBtn);
  const modalbg = document.querySelector(".bground");
  // const namePhotographer = document.querySelector(".nomDuPhotographe");
  modalBtn.addEventListener("click", () => {
    const namePhotographer = document.querySelector(".nomDuPhotographe");
    // console.log("openModal");
    modalbg.style.display = "block";
    // namePhotographer.innerHTML = ${this.name};
  });
};

// Fonction close modal
const closeModal = () => {
  const closeModalCross = document.querySelector(".close");
  // console.log("closeModal", closeModal);
  const modalbg = document.querySelector(".bground");
  closeModalCross.addEventListener("click", () => {
    // console.log("closeModal");
    modalbg.style.display = "none";
  });
};

// formulaire display no
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Fonction check form
function checkFirst() {
  const first = document.getElementById("first");
  if (first.value.length >= 2) {
    first.closest(".formData").setAttribute("data-error-visible", false);
    // console.log("firsttrue");
    return true;
  } else {
    first
      .closest(".formData")
      .setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
      );
    first.closest(".formData").setAttribute("data-error-visible", true);
    // console.log("firstfalse");
    return false;
  }
}

function checkLast() {
  const last = document.getElementById("last");
  if (last.value.length >= 2) {
    last.closest(".formData").setAttribute("data-error-visible", false);
    // console.log("lasttrue");
    return true;
  } else {
    last
      .closest(".formData")
      .setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      );
    last.closest(".formData").setAttribute("data-error-visible", true);
    // console.log("lastfalse");
    return false;
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(email.value)) {
    email.closest(".formData").setAttribute("data-error-visible", false);
    // console.log("mailtrue");
    return true;
  } else {
    email
      .closest(".formData")
      .setAttribute("data-error", "Veuillez indiquer votre email.");
    email.closest(".formData").setAttribute("data-error-visible", true);
    // console.log("mailfalse");
    return false;
  }
}

function checkMessage() {
  const message = document.getElementById("message");
  if (message.value.length < 5) {
    message
      .closest(".formData")
      .setAttribute("data-error", "Veuillez entrer 5 caractères ou plus.");
    message.closest(".formData").setAttribute("data-error-visible", true);
    // console.log("messsagefalse");
    return false;
  } else {
    message.closest(".formData").setAttribute("data-error-visible", false);
    // console.log("messsagetrue");
    return true;
  }
}

// Function Valid form
function validate() {
  // console.log("test");
  let firstValid = checkFirst();
  let lastValid = checkLast();
  let emailValid = checkEmail();
  let messageValid = checkMessage();

  if (firstValid && lastValid && emailValid && messageValid) {
    const data = {
      firstValid: firstValid,
      lastValid: lastValid,
      emailValid: emailValid,
      messageValid: messageValid,
    };
    // console.log(data);
    // console.log("okValid");

    console.log("Prénom: " + first.value);
    console.log("Nom: " + last.value);
    console.log("Adresse mail: " + email.value);
    console.log("Message: " + message.value);
    return true;

  }
}

// Fonction validForm verifie et recupere les donnees formulaire au click submit
const validForm = () => {
  const btnSubmit = document.querySelectorAll(".btn-submit");
  // console.log("btnSubmit", btnSubmit);
  btnSubmit.forEach((btn) => btn.addEventListener("click", validate));
};

// Fonction init est le point d entree du fichier photographerPage.js
// Const init = async () => { Ici on stock les fonction qui doivent être execute };
async function init() {
  const data = await fetchData();
  // console.log(data);
  // alert(data);
  const id = getId();
  // console.log(id);
  const idPhotographersSelection = data.photographers.find(
    (element) => element.id == id
  );
  // console.log(idPhotographersSelection);
  const content = document.getElementById("photographer_section");
  const injecteNomPhoto = document.querySelector(".injecteNomPhotographe");

  let photographerId = new Photographer(idPhotographersSelection);
  // console.log(photographerId);
  content.innerHTML += photographerId.userHeaderPhotographerPage();
  injecteNomPhoto.innerHTML = photographerId.name;
  price.innerHTML = photographerId.price;
  displayPhotographersMedia(data.media, id);
  addLikes();
  totalLikesMediaPhotographer();
  closeSlider();
  moveSlider();
  closeSliderEsc();
  openModal();
  closeModal();
  openDropdown();
  validForm();
}

// init(); Elle est la premiere fonction execute et qui va executer en asynchron les autres fonctions inclus dans celle ci
init();
