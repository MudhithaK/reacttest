import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "../component/Header";

const navigate=() => {
    return(
        <BrowserRouter>
        <Header/>

        <Routes>
           <Route path="/"  element={<home/>}/>
           
        </Routes>
        </BrowserRouter>

    );
};

export default navigate;