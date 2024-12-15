import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;