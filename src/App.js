import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const API = "http://localhost:8001/contacts";
  const [contacts, setContacts] = useState([]);
  // const [oneContact, setOneContact] = useState(null);

  function addContact(newContact) {
    axios.post(API, newContact);
  }
  async function getContacts() {
    let result = await axios.get(API);
    setContacts(result.data);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage contacts={contacts} getContacts={getContacts} />}
        />
        <Route path="/contact" element={<h1>Contact us</h1>} />
        <Route path="/about" element={<h1>About us</h1>} />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
