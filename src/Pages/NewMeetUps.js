import React from "react";
import NewMeetupsForm from "../Components/Meetups/NewMeetupsForm";
import { useHistory } from "react-router-dom";

function NewMeetUps() {
  const history = useHistory();
  function addMeetupsHandler(newMeetUpsData) {
    fetch(
      "https://react-website-45186-default-rtdb.firebaseio.com/Meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetUpsData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("./");
    });
  }

  return (
    <div>
      <h2>New meetups sign in here</h2>
      <NewMeetupsForm onAddMeetUps={addMeetupsHandler} />
    </div>
  );
}

export default NewMeetUps;
