import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

import FavoritesContext from "../../Store/favorites-Context";

function MainHeader() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetings">Add Meetups</Link>
          </li>
          <li>
            <Link to="/todos">
              My Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
