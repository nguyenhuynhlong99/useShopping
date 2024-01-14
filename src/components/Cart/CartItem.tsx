import { useAppDispatch } from '../../hooks';
import { Product } from '../../models/product.model';
import styles from './CartItem.module.css';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

type Props = {
  item: Product;
};

export default function CartItem({ item }: Props) {
  const { image, totalPrice, quantity, title, id } = item;
  const dispatch = useAppDispatch();

  return (
    <li>
      <div className={styles.cartItem}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <div className={`${styles.center} ${styles.quantity}`}>
            <button
              onClick={() => dispatch(decreaseItemQuantity(id))}
              className={styles.quantityAction}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => dispatch(increaseItemQuantity(id))}
              className={styles.quantityAction}
            >
              +
            </button>
          </div>
        </div>
        <span className={`${styles.center} ${styles.price}`}>
          ${totalPrice}
        </span>
      </div>
    </li>
  );
}
