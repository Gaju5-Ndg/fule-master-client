import Home from './pages/Home';
import "./index.css"
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Company from './pages/company/Company';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/company' element={<Company />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
