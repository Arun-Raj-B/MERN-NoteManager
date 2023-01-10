import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";

const App = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="mynotes" element={<MyNotes search={search} />} />
          <Route path="createnote" element={<CreateNote />} />
          <Route path="note/:id" element={<UpdateNote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
