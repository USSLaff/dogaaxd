import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import LoginModal from './components/LoginModal';

import Szallasok from './components/Szallasok';
import AddSzallas from './components/AddSzallas';
import { Szallas } from './components/Szallas';
import { EditSzallas } from './components/EditSzallas';

function App() {

  const [isFetchPending,setFetchPending] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [szallasok, setSzallasok] = useState([]);

  return (
    <BrowserRouter>
      <LoginModal loggedIn={loggedIn} SetLoggedIn={setLoggedIn} />

      <Navbar isLoggedIn={loggedIn} SetLoggedIn={setLoggedIn} />
      <Routes>

      <Route path={"/"} element={<Szallasok szallasok={szallasok} setSzallasok={setSzallasok} isLoggedIn={loggedIn} setFetchPending={setFetchPending} isFetchPending={isFetchPending} />} />
      <Route path={"/post"} element={<AddSzallas isLoggedIn={loggedIn} setFetchPending={setFetchPending} isFetchPending={isFetchPending} />} />
      <Route path={"/single/:id"} element={<Szallas isLoggedIn={loggedIn}  setFetchPending={setFetchPending} isFetchPending={isFetchPending} />} />
      <Route path={"/put/:id"} element={<EditSzallas isLoggedIn={loggedIn} setFetchPending={setFetchPending} isFetchPending={isFetchPending} />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
