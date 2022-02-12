import React , {useState}from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CombineNavbar from "./Application/Components/Navbar/CombineNavbar/CombineNavbar";
import Dashboard from "./Application/Pages/Dashboard/Dashboard";
import AppContainer from "./Application/Components/SignInSingUp/AppContainer";



function App() {
  const [inactive, setInactive] = useState(false);
  return (
      
    <div className="App">
      
      {/* <Router>
        <AppContainer/>
      </Router> */}
        <Router>
          <CombineNavbar
            onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
            }}
          />
        <div className={`conatinerOfApp ${inactive ? "inactiveconatinerOfApp" : ""}`}>
        <Routes>
           <Route  path={"/dashboard"} element={<Dashboard/>}/>
        </Routes>
        </div>
      </Router>
      
    </div>
      
  );
}

export default App;
