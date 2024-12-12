import {BrowserRouter, Route, Routes} from "react-router-dom";
import {header} from "../component/header";

const navigate=() => {
    return(
        <BrowserRouter>
        <header/>

        <Routes>
           <Route path="/"  element={<home/>}/>
           
        </Routes>
        </BrowserRouter>

    );
};

export default navigate;