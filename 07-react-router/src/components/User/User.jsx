import React from "react";
import { useParams } from "react-router";

function User() {
  const { userID } = useParams();
  return (
    <div className="flex h-16 w-full items-center justify-center bg-gray-700 text-2xl font-bold text-white">
      User: {userID}
    </div>
  );
}

export default User;
