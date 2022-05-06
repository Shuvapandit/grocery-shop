
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Additem from './pages/Additem/Additem';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Allitems from './pages/Home/Items/Allitems/Allitems';

import ItemDetail from './pages/IteamsDetail/ItemDetail';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import Manageinventory from './pages/Manageinventory/Manageinventory';


import NotFound from './pages/NotFoundPage/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Blog from './pages/Shared/Header/Blog/Blog';

import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/mangeitems" element={<Manageinventory></Manageinventory>}></Route>
      <Route path="/additems" element={<Additem></Additem>}></Route>
      <Route path="/item/:itemId" element={<ItemDetail></ItemDetail>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
    
     
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
