import { Link } from "react-router-dom";
import categories from "./categoriesList";
 
function Categories(){
    return<> <div className="header">
        <div className="Cat-name">
            <span>All categories</span>

            {categories && categories.length >0 &&
            categories.map((item,index)=>{
                return(
                    <span>{item}</span>
                )
            })}
        </div>

    </div>
</>
}
export default Categories;