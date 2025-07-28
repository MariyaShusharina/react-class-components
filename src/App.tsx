import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import Home from './components/pages/home-page/home-page-component.tsx';
import About from './components/pages/about-page/about-component.tsx';
import Error404Page from './components/pages/error-404-page/error-404-component.tsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  );
}

export default App;
