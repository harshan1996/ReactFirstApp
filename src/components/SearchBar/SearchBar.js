import React, { useState } from "react"
import "./SearchBar.css"


const QueryBar = (props) => {

    // let initialValue = "This is initial value"
    const [inputValue, updateInputValue] = useState([])

    const changeInitialValue = (event) => {
        updateInputValue(event.target.value);
    }

    const clearInput = () => {
        updateInputValue("")

    }

    let shouldDisplay = inputValue.length > 0

    let filteredItems = props.utilities.filter((myItem) => {
        return myItem.includes(inputValue)
    })


    return <div>
        <input type="text" value={inputValue} onChange={changeInitialValue}></input>{inputValue}<br />
        {shouldDisplay === true ? <button onClick={clearInput}>clear</button> : ""}
        <ul>
            {filteredItems.map((dailyItem) => {
                return <li key={dailyItem}>{dailyItem}</li>
            })}
        </ul>
    </div>

}
export default QueryBar
// inputValue in our case is called state.