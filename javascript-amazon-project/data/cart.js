export const cart = [];

export function addToCart(productId) {
  let matchingItem = cart.find((item) => item.productId === productId);

  matchingItem
    ? matchingItem.quantity++
    : cart.push({ productId, quantity: 1 });
}