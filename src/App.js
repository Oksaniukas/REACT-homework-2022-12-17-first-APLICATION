import React, {useState} from "react";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

function App() {

  let [showLoginPage, setShowLoginPage] = useState(true)
  console.log(showLoginPage);


  function changeShowLoginPageState() {
    setShowLoginPage(prevLoginPage => !prevLoginPage); 
    
  }

  return (
    <div className="app-wrapper">

      {showLoginPage && <LoginPage changeState={changeShowLoginPageState}/> }
      
      {!showLoginPage && <MainPage />}

    </div>

  );
}

export default App;

