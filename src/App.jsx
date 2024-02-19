import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { MyProjects } from './components/MyProjects';

function App() {
  return (
    <div className="App">
    <Navigation/>
     <Home/>
     <MyProjects/>
    </div>
  )
}

export default App
