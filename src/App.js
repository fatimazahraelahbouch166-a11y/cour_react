import logo from './logo.svg';
import './App.css';
import Footer from './composant/footer';
import Header from './composant/header';
import Navigation from './composant/navigation'
import Content from './composant/content'
function App() {
  return (
    <div className="App">
      <Content/>
        <Header/>
        <Navigation/>
        <Footer/>
    </div>
  );
}

export default App;
