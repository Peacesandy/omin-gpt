import './App.css';
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Sign from './Components/Sign';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Blog/>
      <Contact/>
      <Sign/>
    </div>
  );
}

export default App;
