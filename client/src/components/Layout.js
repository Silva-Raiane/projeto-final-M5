import "../App.css";
import Header from "./header.js";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <main>
            <Header/>
            {<Outlet/>}
        </main>
    );
}