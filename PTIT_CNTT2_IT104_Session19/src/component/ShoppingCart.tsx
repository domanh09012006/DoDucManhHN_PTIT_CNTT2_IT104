import React, { useMemo } from 'react';

const cartItems = [
  { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
  { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 },
];

const ShoppingCart = () => {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);
  return (
    <div>
      <h3>Tổng cộng: {totalPrice.toLocaleString()}đ</h3>
    </div>
  );
};

export default ShoppingCart;
