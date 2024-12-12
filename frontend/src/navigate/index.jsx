import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "../component/Header";
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import Register from '../pages/Register';

const navigate=() => {
    return(
        <BrowserRouter>
        <Header/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/paysuccess" element={<PaymentSuccess/>}/>
        <Route path="/register" element={<Register/>}/>
           
        </Routes>
        </BrowserRouter>

    );
};

export default navigate;