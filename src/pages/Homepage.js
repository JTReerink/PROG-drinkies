import GalleryCard from "../components/Gallery/GalleryCard";
import items from "../data/items";
import FilterBar from "../components/FilterBar/FilterBar";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Homepage = (props) => {

    const [defaultDrinks, setDefaultDrinks] = useState([])
    const [drinks, setDrinks] = useState([]);

    const onGalleryCardClicked = (collection) => {
        props.onGalleryCardClicked(collection);
    }

    useEffect(() => {
        let i = 0;
        let types = ["beer", "wine", "other"]

        const cardsToRender = items.map(drinkCollection => {
            let temp = (
                <Link key={types[i]} type={types[i]} onClick={() => onGalleryCardClicked(drinkCollection)} to={`/product/${types[i]}`}>
                    <GalleryCard drinks={drinkCollection}/>
                </Link>
            )
            i++
            return temp
        })
        setDrinks(cardsToRender)
        setDefaultDrinks(cardsToRender);

    }, [])

    const onFilter = (props) => {
        const copy = [...defaultDrinks]
        const cardToRender = copy.filter(card => {
            if (card.props.type === props) {
                return card;
            }
        })
        setDrinks([cardToRender])
    }


    return (
        <>
            <FilterBar onFilter={onFilter}></FilterBar>
            {drinks}
        </>
    );
}

export default Homepage;
