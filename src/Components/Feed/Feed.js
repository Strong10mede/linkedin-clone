import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db } from "../../firebase";
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
  return <div className="feed"></div>;
}

export default Feed;
