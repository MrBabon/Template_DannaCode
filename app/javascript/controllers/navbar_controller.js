import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu", "toggleButton", "toggleIcon"];

  connect() {
    this.menuVisible = false;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.menuTargets.forEach((el) => el.classList.toggle("hidden", !this.menuVisible));

    document.body.style.overflow = this.menuVisible ? "auto" : "hidden";
    
    
    const iconSrc = this.menuVisible ? "x-lg.svg" : "menu.svg";
    this.toggleIconTarget.src = `/assets/${iconSrc}`;
    

  }

  toggleButtonClick() {
    this.toggleMenu();
  }

  linkClick() {
    this.toggleMenu();
  }
}
