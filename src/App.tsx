import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchNews from './Components/FetchNews';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ArticleDetails from './Components/ArticleDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<BrowserRouter>

   <Routes>
    <Route element={<FetchNews />} path="/"/>
    <Route element={<ArticleDetails />} path="/articleDetails/:id"/>
   </Routes>
</BrowserRouter>


  );
}

export default App;
