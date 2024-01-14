import { useAppSelector } from '../../hooks';
import { getCart } from './cartSlice';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import styles from './Cart.module.css';

export default function CartList() {
  const cart = useAppSelector(getCart);
  const numberOfCartItems = cart?.length;
  console.log(cart);

  if (!numberOfCartItems) {
    return (
      <div className={styles.cart0}>
        <div className={styles.noItems}>
          <img
            className={styles.img}
            src="Add to Cart-cuate.svg"
            alt="Add to cart"
          />

          <h3>Almost there!</h3>

          <p>
            We are totally sure that you will love some of the items from our
            shop 🤗
          </p>
        </div>
        <div className={styles.goBack}>
          <Link to="/">&larr; Back to shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.cartList}>
      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
