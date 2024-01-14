import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

export default function AppLayout() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
