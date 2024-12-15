import './App.css';
import Home from './pages/home/index';
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision.tsx";

function App() {
  return (
    <BackgroundBeamsWithCollision className="bg-black-1">
      <div className="App">
        <Home />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default App;
