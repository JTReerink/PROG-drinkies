let iterator = 1;
let classToAdd = "";
function getFigures(drinks) {
    let drinksToRender = drinks.map(drink => {
        switch (iterator) {
            case 1:
                classToAdd = "galleryCard__figure galleryCard__figure--big";
                break;
            case 2:
            case 3:
                classToAdd = "galleryCard__figure galleryCard__figure--middle";
                break;
            default:
                classToAdd = "galleryCard__figure galleryCard__figure--small";
        }
        iterator++;
        return (
            <figure className={classToAdd}>
                <img src={drink.img} alt={drink.alt} className="galleryCard__img"/>
            </figure>
        )
    })
    iterator = 1;
    return drinksToRender;
}


export default getFigures;