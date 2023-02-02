
// import './components/App.css'
// import Create from './components/Create';
import Header from './components/Header';
import View from './components/View';
import EditUser from './components/Edit';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import Seminar from './Seminar';

function App() {
  return (
    <BrowserRouter>
        <Header /> 
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/createblog" element={<CreateBlog/>} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path="/seminar" element={<Seminar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
