import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Main page="home" />} />
        <Route path="/search" element={<Main page="search" />} />
        <Route path="/media" element={<Main page="media" />} />
        <Route path="/album" element={<Main page="media_album" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
