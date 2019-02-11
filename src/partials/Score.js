import { SVG_NS, KEYS } from "../settings";

export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, score) {
    let text = document.createElementNS(SVG_NS, "text");
    text.setAttributeNS(null, "x", this.x);
    text.setAttributeNS(null, "y", this.y);
    text.setAttributeNS(null, "font-family", "Silkscreen Web");
    text.setAttributeNS(null, "font-size", this.size);
    text.setAttributeNS(null, "fill", "#FFF");
    text.textContent = score;

    svg.appendChild(text);
  }
}
