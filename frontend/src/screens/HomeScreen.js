import "./HomeScreen.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <p>Home Screen</p>
      <Link to="/categories">
        Categories
      </Link>
    </div>
  )
}

export default HomeScreen