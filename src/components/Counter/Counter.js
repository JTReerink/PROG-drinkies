import "./Counter.css"

const Counter = (props) => {
    return (
        <section className="counter__holder">
            <p className="counter__number">{props.counter}</p>
        </section>
    )
}

export default Counter;