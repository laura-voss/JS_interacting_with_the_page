class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "This paragraph dynamically added by JavaScript!";
    document.body.append(newParagraph);
  }
}

module.exports = View;
