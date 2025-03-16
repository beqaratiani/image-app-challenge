import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function AppLayout() {
  return (
    <div className={`bg-background min-h-[100vh]`}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
