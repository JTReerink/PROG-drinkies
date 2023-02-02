import "./FilterBar.css";

const FilterBar = () => {
    return (
        <section className="filterBar">
            <div className="filterBar__wrapper">
                <div className="filterBar__inputWrapper">
                    <input type="checkbox" name="" id="" className="filterBar__checkbox"/>
                    <label htmlFor="">Beer</label>
                </div>
                <div className="filterBar__inputWrapper">
                    <input type="checkbox" name="" id="" className="filterBar__checkbox"/>
                    <label htmlFor="">Wine</label>
                </div>
                <div className="filterBar__inputWrapper">
                    <input type="checkbox" name="" id="" className="filterBar__checkbox"/>
                    <label htmlFor="">Other</label>
                </div>
            </div>
        </section>
    )
};

export default FilterBar;