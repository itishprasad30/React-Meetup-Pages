import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorite: (meetupID) => {},
  itemIsFavorite: (meetupID) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserfav) => {
      return prevUserfav.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupID) {
    setUserFavorites((prevUserfav) => {
      return prevUserfav.filter((meetup) => meetup.id !== meetupID);
    });
  }

  function itemFavoriteHandler(meetupID) {
    return userFavorites.some((meetup) => meetup.id === meetupID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
