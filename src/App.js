
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
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
      <Route path="/blog" element={<Blog></Blog>}></Route>
       <Route></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
