import items from "../data/items";
import "./Productpage.css";

const Productpage = () => {
    const toBeRendered = items[0].map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.img} alt={item.alt}/>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button>Add to Cart</button>
            </li>
        )
    })
    return (
        <article className="productpage">
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
        </article>
    )
}

export default Productpage;