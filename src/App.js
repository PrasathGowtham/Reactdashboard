
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/login';
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css';
import Dashboard from './dashboard';
import Charts from './Charts';
import Button from './Components/button';
import Cards from './Components/Cards';
import Error  from './Components/error';
import Tabels from './Components/Tabel';
import Color from './Components/Color';
import Border from './Components/border ';
import Animation from './Components/Animation';
import Others from './Components/other';
function App() {
  return (
    <div >
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/charts" element={<Charts/>}/>
    <Route path="/button" element={<Button/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/error" element={<Error/>}/>
    <Route path="/tabels" element={<Tabels/>}/>
    <Route path="/color" element={<Color/>}/>
    <Route path="/border" element={<Border/>}/>
    <Route path="/animation" element={<Animation/>}/>
    <Route path="/other" element={<Others/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
