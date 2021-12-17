import './App.css';
import Cards from './componentes/Cards/Cardss';
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cards />} />   
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
