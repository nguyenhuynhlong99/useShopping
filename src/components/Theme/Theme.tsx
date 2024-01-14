import { useTheme } from '../../ThemeContext';

export default function Theme() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme} className="header-icons">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
