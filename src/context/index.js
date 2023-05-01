import ProductContext, { ProductConsumer } from './Product/ProductContext';
import ProductProvider from './Product/ProductProvider';
import CartContext, { CartConsumer } from './Cart/CartContext';
import CartProvider from './Cart/CartProvider';

export default ProductContext;
export {
  ProductProvider,
  ProductConsumer,
  CartProvider,
  CartContext,
  CartConsumer,
};
