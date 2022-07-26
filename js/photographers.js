class Photographer {
  constructor(data) {
    this.name = data.name;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.tags = data.tags;
    this.portrait = data.portrait;
    this.id = data.id;
  }
  photographersIndexPage() {
    return `
<div class="photographer">
<a href="./photographer-page.html?id=${this.id}">
<img src="public/img/PhotographersIDPhotos/${this.portrait}" alt="photo de ${
      this.altText
    }">
<h2 class="identite">${this.name}</h2>
<p class="lieu">${this.city}, ${this.country}</p>
<p class="tagline">${this.tagline} </p>
<p class="prix">${this.price}€/jour</p>
<ul class="photographer__tags">${this.tags
      .map((element) => `<li class="photographer__tags__tag">#${element}</li>`)
      .join("")}</ul>
</a>
</div>
`;
  }
  userHeaderPhotographerPage() {
    return `
    <div class="photographer_section">
          <div class="photographer_portrait"> 
          <img class="photographer_image" src="public/img/PhotographersIDPhotos/${
            this.portrait
          }" alt="photo de ${this.altText}">
          </div>
                <div class="photographer_contact">
                <button class="button-contact button">Contactez-moi</button>
                </div>
                      <div class="photographer_info">
                          <div class="photographer__infos__content">
                          <h2 class="identite">${this.name}</h2>
                          <p class="lieu">${this.city}, ${this.country}</p>
                          <p class="tagline">${this.tagline} </p>
                              
                              <ul class="photographer__tags">${this.tags
                                .map(
                                  (element) =>
                                    `<li class="photographer__tags__tag">#${element}</li>`
                                )
                                .join("")}</ul>
                              
                      </div>
            
    </div>
    `;
  }
}
