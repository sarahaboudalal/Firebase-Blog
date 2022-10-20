import './index.css';
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost';
import Login from './Pages/Login';
import { signOut } from 'firebase/auth';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));



  function signUserOut(){
    signOut(auth)
    .then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/'
    })
  }
  return (
    <BrowserRouter>
    <nav>
    <Link to='/'>Home</Link>
    
    {!isAuth ? 
    
    <Link to='/login'>Login</Link>
     : 
     <>
     <Link to='/createpost'>Create Post</Link>
     <button onClick={signUserOut}>Log Out</button> 
     </>}
    </nav>
    <Routes>
    <Route path='/' element={<HomePage isAuth={isAuth}/>}/>
    <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
    <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
