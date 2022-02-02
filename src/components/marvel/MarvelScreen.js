import React from "react";
import HeroeList from "../heroe/HeroeList";
const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Comics</h1>
           <HeroeList publisher={'Marvel Comics'} />
        </div>
    );
};

export default MarvelScreen;
