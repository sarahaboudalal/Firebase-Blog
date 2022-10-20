import './index.css';
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/createpost' element={<CreatePost/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
