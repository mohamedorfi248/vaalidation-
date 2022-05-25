import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import { current } from './JS/Actions/user';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Users from './Pages/Users/Users';
// import Private from './Routes/PrivateRoute';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("token")){
      dispatch(current())
    }
  }, [dispatch])

  // const isAuth = useSelector((state) => state.userReducer.isAuth);

  // const token = localStorage.getItem("token")
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/profile' element={<Private isAuth={isAuth} />}> */}
          <Route path='/profile' element={<Profile />}/>
        {/* </Route> */}
        <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
