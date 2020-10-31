
import Menu from './components/menu';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
import Overlay from './components/overlay';
import Gallery from './components/gallery';

const App = () => {
  return (
    <div className="App">
      <div className="section intro">
        <Header />
      </div>
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
