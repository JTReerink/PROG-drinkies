import './App.css';
import GalleryCard from "../components/Gallery/GalleryCard";
import items from "../data/items";
import FilterBar from "../components/FilterBar/FilterBar";

const App = () => {

    return (
        <>
            <FilterBar></FilterBar>
            <GalleryCard drinks={items.beer}></GalleryCard>
            <GalleryCard drinks={items.wine}></GalleryCard>
            <GalleryCard drinks={items.other}></GalleryCard>
        </>
    );
}

export default App;
