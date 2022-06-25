import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contact/list"}/>}/>
        <Route path={"/contact/list"} element={<ContactList/>}/>
        <Route path={"/contact/add"} element={<AddContact/>}/>
        <Route path={"/contact/view/:contactId"} element={<ViewContact/>}/>
        <Route path={"/contact/edit/:contactId"} element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
