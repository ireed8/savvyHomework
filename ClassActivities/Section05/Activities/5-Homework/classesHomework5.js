class Shoes {
  constructor(size, brand, color) {
    this.size = size;
    this.brand = brand;
    this.color = color;
  }
  orderInfo() {
    return `This is a ${this.size} size for a ${this.brand} tennis in ${this.color}.`
  }
}

let Nike = new Shoes(12, "Nike", "Blue");

