import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store.js';
import { Provider } from 'react-redux';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import Profile from './pages/Profile.js';
import Home from './pages/Home.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Cart from './pages/Cart.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword.js';
import Upload from './pages/Upload.js';
import Product from './pages/Product.js';
import ProductSearch from './pages/ProductSearch.js';
import CategoryWise from './pages/CategoryWise.js';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} >
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path='/signup' element={<SignUp />} />
//       <Route path='/signin' element={<SignIn />} />
//     </Route>
//   )
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='/' element={<Home/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            <Route path='/reset-password/:id' element={<ResetPassword/>} />
            <Route path='/upload' element={<Upload/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/search' element={<ProductSearch/>} />
            <Route path='/category/:category' element={<CategoryWise/>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
