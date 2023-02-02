import "./GalleryCard.css";
import getFigures from "./helpers/galleryCardHelper";

const GalleryCard = (props) => {

    return (
        <article className="galleryCard">
            {getFigures(props.drinks)}
        </article>
    )
}

export default GalleryCard;