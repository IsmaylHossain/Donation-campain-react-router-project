

// const Header = () => {
//     return (
//         <div className="flex  background-img flex-col justify-center  items-center gap-10 h-[70vh] bg-green-200">
        
//             <h1 className="text-4xl font-bold mx-auto text-center">I Grow By Helping People in Need</h1>
//             <div className="flex">
//                 <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs rounded-r-none" />
//                 <button className="btn btn-error rounded-l-none text-white">Search</button>
//             </div>
//         </div>
//     );
// };

// export default Header;

import { useState } from "react";
import PropTypes from 'prop-types';

const Header = ({handleSearch}) => {

    const [search , setSearch] = useState("");
    const handleInput = (e) =>{
        setSearch(e.target.value);
        // console.log(setSearch.target)
    }
    const handleSubmit = () =>{
        handleSearch(search);
    }



    return (
        <div className="relative">
            <div className="top-0 -z-50">
                <img className="w-screen" src="https://i.ibb.co/qMrStTZ/Screenshot-2023-09-26-193322.png" alt="Banner"/>
                    <div className="absolute inset-0 flex flex-col items-center  bg-white bg-opacity-[80%]   md:justify-center ">
                        <h1 className="text-black text-xl md:text-2xl lg:text-5xl font-bold p-5">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input onChange={handleInput} value={search} className="input input-bordered join-item bg-white" name="searchInput" placeholder="Search here"/>

                            <button onClick={handleSubmit} className="btn join-item rounded-r-lg bg-rose-500 text-white border-none px-7">Search</button>
                            
                        </div>
                        
                    </div>
                    
            </div>
            
        </div>
    );
};

Header.propTypes = {
    handleSearch: PropTypes.object
}

export default Header;