import './App.css';
import React, { ReactNode } from 'react';
import { Routes, Route  } from 'react-router-dom';
import ClientLayout from './layout/react-layout';
import Home from './components/home.tsx';
import Articles from './components/articles.tsx';
import Count from './components/count.tsx';
import Productlist from './components/admin/productlist.tsx';
import ProductAdd from './components/admin/productapp.tsx';
import Editproduct from './components/admin/editproduct.tsx';
import Register from './components/user/register.tsx';
import Login from './components/user/login.tsx';
import ProductDetail from './components/Dell.tsx';
import Cartt from './components/Cart.tsx';
// import { isAuthenticated } from './services/privateRoute';

// interface CustomRouteProps {
//   path?: string;
//   element: ReactNode;}

// const PrivateRoute: React.FC<CustomRouteProps> = ({ element, ...rest }) => {
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" />;
//   }
//   return <Route {...rest} element={element} />;
// };


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/count' element={<Count />}></Route>
      <Route path='/admin/add' element={<ProductAdd />}></Route>
      <Route path='/admin/:id/edit' element={<Editproduct />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path="/" element={<ClientLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Articles' element={<Articles />}></Route>
        <Route path='/product/:id' element={<ProductDetail />} ></Route>
        <Route path='/cart' element={<Cartt/>}></Route>
        <Route path='/admin' element={<Productlist />}></Route>

      </Route>
    </Routes>
  );
};

export default App;
