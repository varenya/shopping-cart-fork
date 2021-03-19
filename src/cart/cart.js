export function createCart({ items = [] }) {
  function getTotal() {
    let rawTotal = items.reduce((acc, curr) => curr.price + acc, 0);
    return rawTotal;
  }

  /* {name: "Dove", price : 80 } */
  function addItem(newItem) {
    items = [...items, newItem];
    return items;
  }

  function addItemWithProductId(productId, products) {
    const newItem = products.find((product) => product.productId === productId);
    if (newItem) {
      items = [...items, newItem];
      return items;
    }
    return items;
  }

  function getItems() {
    return items;
  }

  return {
    getTotal,
    addItem,
    getItems,
    addItemWithProductId,
  };
}
