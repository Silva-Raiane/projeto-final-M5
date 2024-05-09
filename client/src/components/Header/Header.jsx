import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <Link to="/indexPage" className="logo-type">
          InsightBytes
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    );
}