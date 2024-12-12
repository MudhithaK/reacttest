export const Header =() =>{
 return(
    <nav id="header" className="bg-black text-white">
    <div className="w-full container max-auto flex flex-wrap items-center justify-content-between mt-0 py-2">

        <div classNmae="logo-wrapper pl-4 flex items-center">
            <img src={"/"} alt="logo"/>
        </div>

        <div className="nev-menu-wrapper flex item-center justify-between space-x-10">
            <div>Home</div>
            <div>About</div>
        </div>

        <div className="flex items-center justify-center space-x-4">
            <div>Cart</div>
            <div>Login</div>
        </div>

    </div>
    </nav>
 );

};