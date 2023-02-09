import './App.css';
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import Counter from "../components/Counter/Counter";

const App = () => {
    const [collectionForProductPage, setCollectionForProductPage] = useState([])
    const [counter, setCounter] = useState(0);
    const onGalleryCardClicked = (collection) => {
        setCollectionForProductPage(collection);
    }

    const addToCart = () => {
        console.log(counter);
        setCounter(counter+1)
    }

    return (
        <>
            <Counter counter={counter} />
            <Routes>
                <Route path={"/"} element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>}/>
                <Route path={"/product/:type"} element={<Productpage addToCart={addToCart} collection={collectionForProductPage} />}/>
            </Routes>
        </>
    );
}

export default App;
