import { createContext } from 'react';

const CartContext = createContext();

export const CartConsumer = CartContext.Consumer;

export default CartContext;
