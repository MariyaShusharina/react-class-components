import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.tsx';
import Header from '../header/header.tsx';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
