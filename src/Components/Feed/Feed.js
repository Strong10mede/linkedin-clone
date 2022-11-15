import React, { useEffect, useState } from "react";
import "./Feed.css";
import FlipMove from "react-flip-move";
import firebase from "firebase/compat/app" 
import { db } from "../../firebase";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOptions from "./InputOptions/InputOptions";
import Post from "./Post/Post";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = {};

  useEffect(
    () =>
      db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        ),
    []
    );
    
    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user?.displayName,
            description: user?.email,
            message: input,
            photoUrl: user?.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }
    return (
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
            <InputOptions
              title="Video"
              Icon={SubscriptionsIcon}
              color="#E7A33E"
            />
            <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
            <InputOptions
              title="Write article"
              Icon={CalendarViewDayIcon}
              color="#7FC15E"
            />
          </div>
        </div>

        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    );
}

export default Feed;
