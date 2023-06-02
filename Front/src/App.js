import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  // const email = "e@s.com";
  // const password = "123456";
  const navigate = useNavigate();

  const login = (data) => {
    //if (data.password === password && data.email === email) {
    setAccess(true);
    navigate("/home");
    //}
  };

  // App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  
  const onSearch = async (id) => {
    const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    try {
      data ? setCharacters(() => [...characters, data]) : window.alert("¡No hay personajes con este ID!");
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
