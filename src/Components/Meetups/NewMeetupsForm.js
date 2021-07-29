import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetupsForm.module.css";

function NewMeetupsForm(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const newMeetUpsData = {
      title,
      image,
      address,
      description,
    };
    console.log(newMeetUpsData);
    setTitle("");
    setImage("");
    setAddress("");
    setDescription("");
    props.onAddMeetUps(newMeetUpsData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetups Title </label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetups Image</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetups Address</label>
          <input
            type="text"
            required
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Add a New Meetups</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupsForm;

//   const titleInputRef = useRef();
//   const imageInputRef = useRef();
//   const addressInputRef = useRef();
//   const descriptionInputRef = useRef();

// const enteredTitle = titleInputRef.current.value;
// const enteredImage = imageInputRef.current.value;
// const enteredAddress = addressInputRef.current.value;
// const enteredDescription = descriptionInputRef.current.value;

// const NewMeetupsData = {
//   title: enteredTitle,
//   image: enteredImage,
//   address: enteredAddress,
//   description: enteredDescription,
// };
// console.log(NewMeetupsData);
