import React from "react";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <h3>App running</h3>
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
