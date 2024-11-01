import { useState } from "react";
import CartWidget from "../../common/cartWidget/cartWidget";
import "./navbar.css";
import { categories } from "../../../components/layouts/navBar/catgories";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={"container-nav"}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dyk7jfiye/image/upload/v1728311752/fposter_small_wall_texture_square_product_600x600_nh9hsc.jpg"
          alt="logo"
          width={40}
          height={40}
        />
      </Link>
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
