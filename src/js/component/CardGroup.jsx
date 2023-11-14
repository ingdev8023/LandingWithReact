import React from "react";
import Cards from "./Cards";

const CardGroup = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Cards link = 'https://picsum.photos/500/300'></Cards>
            <Cards link = 'https://picsum.photos/500/300'></Cards>
            <Cards link = 'https://picsum.photos/500/300'></Cards>
            <Cards link = 'https://picsum.photos/500/300'></Cards>
            <Cards link = 'https://picsum.photos/500/300'></Cards>
            <Cards link = 'https://picsum.photos/500/300'></Cards>

        </div>
    )
}

export default CardGroup