import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const user = useContext(userContext);

  console.log(user);

  if (!user.user || user.user.username == "")
    return <div>Please Login First</div>;

  return <div>Welcome {user.user.username}</div>;
}

export default Profile;
