
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
                    <div className="absolute inset-0 bg-white bg-opacity-[95%] flex flex-col items-center   md:justify-center ">
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