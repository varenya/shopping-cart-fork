import { createCart } from "./cart";

describe("Shopping Cart", () => {
  it("should get the total price based on products", () => {
    const cart = createCart({
      items: [{ price: 30, name: "Axe", productId: 1 }],
    });
    expect(cart.getTotal()).toEqual(30);
  });
  it("should add new item", () => {
    const cart = createCart({
      items: [{ price: 30, name: "Axe", productId: 1 }],
    });
    expect(cart.getItems()).toHaveLength(1);

    let newItem = { name: "Dove", price: 80 };

    cart.addItem(newItem);
    expect(cart.getItems()).toHaveLength(2);
    expect(cart.getTotal()).toEqual(110);
  });
});
