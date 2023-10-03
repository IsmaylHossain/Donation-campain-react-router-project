

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 h-[70vh] bg-green-200">
            <h1 className="text-4xl font-bold">I Grow By Helping People in Need</h1>
            <div className="flex">
                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs rounded-r-none" />
                <button className="btn btn-error rounded-l-none text-white">Search</button>
            </div>
        </div>
    );
};

export default Header;