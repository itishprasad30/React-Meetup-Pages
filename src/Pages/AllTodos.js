import React, { useContext } from "react";
import FavoritesContext from "../Store/favorites-Context";
import MeetupsList from "../Components/Meetups/MeetupsList";

function AllTodos() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <h5>You Got no Favorites yet .Start Adding some....</h5>;
  } else {
    content = <MeetupsList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites Pages</h1>
      {content}
    </section>
  );
}

export default AllTodos;
