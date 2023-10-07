 

import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { useState } from "react";



const Home = () => {

    const cardsDet= useLoaderData();

    const [cards, setSelectItem] = useState(cardsDet);
    // console.log(selectItem);
    const handleSearch = (text) =>{
        const newItem = cardsDet.filter((category)=> category.components.toLowerCase().includes(text.toLowerCase()));
        setSelectItem(newItem);
    }


    return (
       <div>
        <Header handleSearch={handleSearch}></Header>
        <Cards cards={cards}></Cards>
       </div>
    );
};

export default Home;