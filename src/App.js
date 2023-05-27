import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
