import "./Productpage.css";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const Productpage = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const {type} = useParams();
    if (type === "wine") {
        document
            .getElementsByTagName("meta")
            .namedItem("description")
            .setAttribute('content', 'Add Wine to Cart')
    }

    const toBeRendered = props.collection.map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.img} alt={item.alt}/>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button onClick={props.addToCart}>Add to Cart</button>
            </li>
        )
    })
    return (
        <article className="productpage">
            <div className="home__holder">
                <Link className="home" to={"/"}>HOME</Link>
            </div>
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
        </article>
    )
}

export default Productpage;