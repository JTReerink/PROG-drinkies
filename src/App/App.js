import './App.css';
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import {Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/product/:type"} element={<Productpage/>}/>
            </Routes>
        </>
    );
}

export default App;
