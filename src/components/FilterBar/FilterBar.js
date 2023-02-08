import "./FilterBar.css";
import {useEffect, useState} from "react";

const FilterBar = ({onFilter}) => {

    const [labels, setLabels] = useState([])

    useEffect(() => {
        let teBeRenderedLabels = [
            {
                name: "beer",
                checked: false,
            },
            {
                name: "wine",
                checked: false,
            },
            {
                name: "other",
                checked: false,
            },
        ]
        setLabels(teBeRenderedLabels);
    }, [])
    const teBeRenderedLabels = labels.map(label => {
        let input = <input onChange={() => filterDrink(label.name)} type="checkbox" name="" id={label.name} className="filterBar__checkbox"/>
        if(label.checked){
            input = <input checked onChange={() => filterDrink(label.name)} type="checkbox" name="" id={label.name} className="filterBar__checkbox"/>
        }
        return (
            <div key={label.name} className="filterBar__inputWrapper">
                {input}
                <label htmlFor={label.name}>{label.name}</label>
            </div>
        )
    })
    const filterDrink = (filter) => {
        const copy = [...labels];
        const newState = copy.map(label => {
            if(label.name !== filter){
                label.checked = false;
            }
            if(label.name === filter){
                label.checked = true;
            }
            return label;
        })
        setLabels(newState);
        onFilter(filter);
    }

    return (
        <section className="filterBar">
            <div className="filterBar__wrapper">
                {teBeRenderedLabels}
            </div>
        </section>
    )
};

export default FilterBar;