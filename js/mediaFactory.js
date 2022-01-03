// Creation de la class mediaFactory
class MediaFactory {
  constructor(data) {
    if (data.type === "img") return new ImgageFactory(data);
    if (data.type === "video") return new VideoFactory(data);
  }
}
// Creation de la class imgFactory
class ImgageFactory {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.image = data.image;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.src = data.src;
    this.title = data.title;
    this.altText = data.altText;
  }
  // 1er methode
  photographersIndexPage() {
    return `
<div id="photographer_media">
  <figure>
    <img tabindex="0" class="diapo" src="public/img/${this.photographerId}/${this.image}" alt="${this.altText}"/>
      <figcaption>
        <h2 class="mediaTitle">${this.title}</h2>
        <div class="mediaLikes" data-likes="false">
        <span class="counter" data-id="${this.id}">${this.likes}</span>
          <span id="heart" class=" "><i tabindex="0" class="heart fas fa-heart" data-id="${this.id}"></i></span>
        </div>
      </figcaption>
  </figure>
</div>
`;
  }
  // 2eme methode
  renderSlide() {
    return `
    <figure class="figureSlider masque">
     <img src="public/img/${this.photographerId}/${this.image}" class="diapoSlider active" id="${this.id}" alt="${this.altText}"/>
     <figcaption>
      <h2 class="mediaTitle">${this.title}</h2>
     </figcaption>
    </figure>`;
  }
}
// Creation de la class videoFactory
class VideoFactory {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.video = data.video;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.src = data.src;
    this.title = data.title;
    this.altText = data.altText;
  }
  // 1er methode
  photographersIndexPage() {
    return `
    <div id="photographer_media">
    <figure>
    <video width="250" class="diapo" src="public/img/${this.photographerId}/${this.video}" type="video/mp4" alt="${this.altText}"></video>
        <figcaption>
          <h2 class="mediaTitle">${this.title}</h2>
          <div class="mediaLikes">
          <span class="counter" data-id="${this.id}">${this.likes}</span>
          <span id="heart" class=" "><i tabindex="0" class="heart fas fa-heart" data-id="${this.id} data-likes="false""></i></span>
          </div>
        </figcaption>
    </figure>
  </div>
`;
  }
  // 2eme methode
  renderSlide() {
    return `
    <figure class="figureSlider masque">
    <video controls width="250" controls autoplay title= "${this.altText}">
    <source tabindex="0" class="diapoSlider active" src="public/img/${this.photographerId}/${this.video}" id="${this.id}">
    </video>
     <figcaption>
      <h2 class="mediaTitle">${this.title}</h2>
     </figcaption>
    </figure>`;
  }
}
