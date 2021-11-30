import React, { useState } from "react";
import Sresult from './Sresult';

const Search = (props) => {
    const [img, setImg] = useState();

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <>
            <div className="searchbar mt-5 mb-4 text-center">
                <input className="w-50 border border-danger p-2 rounded" type="text" placeholder="Search Anything..." onChange={inputEvent} value={img} />
            </div>
            {img === "" ? null : <Sresult name={img} />}
        </>
    )
}

export default Search;
