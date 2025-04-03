import { Link } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";

function Home(){
    return <div>
        <Header></Header>
        <Categories></Categories>
        <Link to='/add-product'>ADD PRODUCT</Link>
    </div>
}

export default Home;