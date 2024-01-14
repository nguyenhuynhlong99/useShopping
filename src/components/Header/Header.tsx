import Theme from '../Theme/Theme';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          🛍 useShopping
        </Link>
        <div>
          <Link
            to="/cart"
            className="header-icons"
            style={{ marginRight: '8px' }}
          >
            🛒
          </Link>
          <Theme />
        </div>
      </nav>
    </header>
  );
}
