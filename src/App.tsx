// import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer.tsx';
import Header from './components/header/header.tsx';
import Main from './components/main/main-component.tsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
