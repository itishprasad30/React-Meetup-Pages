import React, { useEffect, useState } from "react";
import MeetupsList from "../Components/Meetups/MeetupsList";
// import Skeleton from "@yisheng90/react-loading";
import ReactLoading from "react-loading";

function AllFavorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-website-45186-default-rtdb.firebaseio.com/Meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
          // console.log(meetups);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>
          <ReactLoading type={"bars"} color={"grey"} />
        </p>
      </section>
    );
  }
  return (
    <div>
      <h1>All Users Info</h1>
      <div>
        <MeetupsList meetups={loadedMeetups} />
      </div>
    </div>
  );
}

export default AllFavorites;

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is Rome City ",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 1, 12345 Meetup City",
//     desc: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is San-Francisco Bridge",
//     image:
//       "https://www.desktopbackground.org/download/2560x1440/2010/06/21/36705_golden-gate-bridge-san-francisco_3840x2160_h.jpg",
//     address: "Meetupstreet 2, 12345 Meetup City",
//     desc: "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];
