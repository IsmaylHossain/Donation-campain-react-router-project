

// const Header = () => {
//     return (
//         <div className="flex flex-col justify-center items-center h-[70vh] p-8 bg-green-200">
//             <h1 className="text-4xl pb-8 font-bold  text-center">I Grow By Helping People in Need</h1>
//             <div className="flex justify-center items-center ">
//                 <input type="text" placeholder="Type here" className="input input-bordered rounded-r-none input-md max-w-7xl  " />
//                 <button className="btn btn-error rounded-l-none text-white">Search</button>
//             </div>
//         </div>
//     );
// };

// export default Header;

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 h-[70vh] bg-green-200">
            <h1 className="text-4xl font-bold">I Grow By Helping People in Need</h1>
            <div className="flex">
                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                <button className="btn btn-error text-white">Search</button>
            </div>
        </div>
    );
};

export default Header;