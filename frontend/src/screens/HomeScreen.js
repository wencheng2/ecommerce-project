import "./HomeScreen.css";
import { Link } from "react-router-dom";
import background from "../components/HomepageImage.png"

const HomeScreen = () => {
  return (
    <Link to="/categories">

      <div className="homescreen" 
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
      </div>
    </Link>
  )
}

export default HomeScreen
