import Home from "./Pages/Home";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/watch/Watch";
import Login from "./Pages/Login/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={user?<Navigate to="/"/>:<Login />}/>
      <Route path="/" element={user?<Home />:<Navigate to="/login"/>}/>
      <Route exact path="/register" element={<Register />} />
        {
           user&&
           <Route exact path="*" element={
            <Routes>
              
              <Route exact path="/movies" element={<Home type="movie" />} />
              <Route exact path="/series" element={<Home type="series" />} />
              <Route exact path="/watch" element={<Watch />} />
            </Routes>
          }/>
        }  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
