import Topbar from './Components/Topbar';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import SinglePost from './pages/SinglePost';
import Write from './pages/Write';
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
      <Topbar/>

        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/write" element={user ? <Write/> : <Register/>} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/post/:postId" element={<SinglePost/>} />

        </Routes>
      </Router>

     {/* <Home/> */}
     {/* <SinglePost/> */}
     {/* <Write/> */}
     {/* <Settings/> */}
     {/* <Login/>
     <Register/> */}
    </div>
  );
}

export default App;
