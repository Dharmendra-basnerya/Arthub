import { Link } from "react-router-dom";

function Header(){
    return<> <div className="header">


        <span className="mt-3">SELL & PURCHASE ONLINE .........</span>

        <Link to='/'>Home </Link>
        <input type="text" className="searchwar"></input>
        <button className="search-btn">search</button>
        <Link to='Login' className="login-btn">Login</Link>
        <Link to='Logout' className="logout-btn">Logout</Link>

    </div>
</>
}
export default Header;