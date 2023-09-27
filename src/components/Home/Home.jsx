// import { useLoaderData } from "react-router-dom";
// import Header from "../Header/Header";
// import Cards from "../Cards/Cards";



// const Home = () => {

//     const cards= useLoaderData();

//     console.log(cards);


//     return (
//        <div>
//         <Header></Header>
//         <Cards cards={cards}></Cards>
//        </div>
//     );
// };

// export default Home;
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";



const Home = () => {

    const cards= useLoaderData();

    console.log(cards);


    return (
       <div>
        <Header></Header>
        <Cards cards={cards}></Cards>
       </div>
    );
};

export default Home;