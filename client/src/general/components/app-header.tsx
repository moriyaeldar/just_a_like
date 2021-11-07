import { Switch, Route,Link } from "react-router-dom";
import { Loader } from "./loader";
export const Header=()=>{
    return(
        <section className="header">
            <a><Link to= "/profile">Profile</Link></a>
        </section>
    )


}