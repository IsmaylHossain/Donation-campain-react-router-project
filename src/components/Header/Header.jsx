

const Header = () => {
    return (
        <div className="h-[70vh] bg-green-200">
            <h1 className="text-4xl font-bold items-center">I Grow By Helping People in Need</h1>
            <div className="flex justify-center items-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                <button className="btn btn-error text-white">Search</button>
            </div>
        </div>
    );
};

export default Header;