import React, { useState } from "react";
import URLForm from "./components/URLForm";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <URLForm />
    </div>
  );
};

export default App;
