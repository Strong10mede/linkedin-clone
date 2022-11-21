import React from "react";
import "./HeaderOption.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  console.log(avatar);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}

      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
