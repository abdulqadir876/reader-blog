
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Article from "./components/Article";
import Create from "./components/Create";
import Header from './components/Header';
import Home from './components/Home';
import supabase from "./config/supabaseClient";

function App() {

  return (
    <div>
      <Router>
      <Header/>
      <hr className='text-light'/>
      <Routes>

        <Route path="/" exact element={<Home/>}/>
        <Route path="/create"  element={<Create/>}/>
        <Route path="/article/:id" element={<Article/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
