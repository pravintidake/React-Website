import React, { useState } from "react";


const Search = (props) => {
    const img = `https://source.unsplash.com/670x400/?${props.name}`;
    return (
            <>
                <div className="text-center">
                    <img src={img} alt='Serach Result' />
                </div>
            </>
    )
}

export default Search;
