import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import User from "./Pages/User/User";
import UserEdit from "./Pages/UserEdit/UserEdit";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import EditProduct from "./Pages/EditProduct/EditProduct";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import Login from "./Pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";
import ListPage from "./Pages/ListPage/ListPage";
import EditList from "./Pages/EditList/EditList";
import NewList from "./Pages/NewList/NewList";


function App() {
  const {user}=useContext(AuthContext);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={user?<Navigate to="/"/>:<Login />} />
          {user&&
          <Route exact path="*" element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/users" element={<User />} />
                  <Route exact path="users/edit/:id" element={<UserEdit />} />
                  <Route exact path="/newuser" element={<NewUser />} />
                  <Route exact path="/products" element={<Products />} />
                  <Route exact path="products/edit/:id" element={<EditProduct />} />
                  <Route exact path="/newproducts" element={<CreateProduct />} />
                  <Route exact path="/list" element={<ListPage/>}/>
                  <Route exact path="list/edit/:id" element={<EditList />} />
                  <Route exact path="/newlist" element={<NewList/>} />
                </Routes>
              </div>
            </>
          } />}
        </Routes>
      </BrowserRouter >
    </div >

  );
}

export default App;
