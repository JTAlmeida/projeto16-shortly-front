import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import UserUrls from "./UserUrls/UserUrls";
import Ranking from "./Ranking/Ranking";
import PrivatePage from "./PrivatePage";
import UserContext from "../contexts/UserContext";

function App() {
  const [user, setUser] = useState("");

  const auth = JSON.parse(localStorage.getItem("shortly"));

  if (auth && user === "") {
    setUser(JSON.parse(localStorage.getItem("shortly")));
  }
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
            <Route path="/sign-in" element={<Signin />}></Route>
            <Route
              path="/me"
              element={
                <PrivatePage>
                  <UserUrls />
                </PrivatePage>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
