import { Component } from 'react';
import Footer from './components/footer/footer.tsx';
import Header from './components/header/header.tsx';
import Main from './components/main/main-component.tsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
