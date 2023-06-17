import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1>Welcome to the Travel Landing Page</h1>
      
        <Link to="/home" className={style.button}>
          <h1>Go to Home, go on a trip</h1>
        </Link>
      
    </div>
  );
};

export default Landing;
