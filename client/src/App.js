import React from "react";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.appWrapper}>
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Main />} default />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/product/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
