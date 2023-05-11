import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Holovna } from './modules';

function App() {
  return ( 
  <Router>
    {/* <Header/> */}
    <Routes>
      <Route exact path="/" element={<Holovna/>} />  
    </Routes>
  </Router>);
}

export default App;
