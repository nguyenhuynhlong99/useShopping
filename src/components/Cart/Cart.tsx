import CartList from './CartList';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCart } from './cartSlice';
import Checkout from './Checkout';

export default function Cart() {
  const cart = useAppSelector(getCart);
  const numberOfCartItems = cart.length;

  return (
    <div className={styles.container}>
      {numberOfCartItems > 0 && (
        <div className={styles.heading}>
          <Link to="/">&larr; Back to shopping</Link>
          <h2>Your Cart</h2>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <CartList />
        <Checkout />
      </div>
    </div>
  );
}
