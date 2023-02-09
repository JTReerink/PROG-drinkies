import './App.css';
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

const App = () => {
    const [collectionForProductPage, setCollectionForProductPage] = useState([])
    const onGalleryCardClicked = (collection) => {
        setCollectionForProductPage(collection);
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>}/>
                <Route path={"/product/:type"} element={<Productpage collection={collectionForProductPage} />}/>
            </Routes>
        </>
    );
}

export default App;
