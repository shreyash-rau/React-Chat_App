import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// pages of chat app
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";


// scss file here
import "./Styles/Home.scss";
import  "./Styles/Reg+Log.scss";


function App() {
  
  const{ currentUser } = useContext(AuthContext);

  // using the function to show if user login then chat page nor show login page 
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };
   
  return(
  <BrowserRouter>

    <Routes>

      <Route path="/" />
      <Route index 
      element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>

  </BrowserRouter>

  )
}

export default App;
