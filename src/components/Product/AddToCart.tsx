import { useAppDispatch, useAppSelector } from '../../hooks';
import { Product } from '../../models/product.model';
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '../Cart/cartSlice';
import styles from './Product.module.css';

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const { id, title, price, image } = product;
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    if (quantity === 0) {
      const newItem = {
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
      };
      dispatch(addItem(newItem));
    } else {
      dispatch(increaseItemQuantity(id));
    }
  }

  return (
    <button onClick={handleAddToCart} className={styles.btn}>
      {quantity !== 0 ? `Add to cart(${quantity})` : 'Add to cart'}
    </button>
  );
}
