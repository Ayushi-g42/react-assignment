import React from "react";
import { Container } from "./style";

export const UserProfile = (props) => {
  const { userDetail } = props;

  if (!userDetail) return;
  return (
    <Container>
      <p className="text">Profile Page</p>
      <div className="profile">
        <div>
          <p>{userDetail?.name}</p>
          <p className="last-item">Username : {userDetail?.username}</p>
        </div>
        <div>
          <p>
            {" "}
            {userDetail?.address?.street +
              " " +
              userDetail?.address?.suite +
              " " +
              userDetail?.address?.city +
              " " +
              userDetail?.address?.zipcode}
          </p>
          <p className="last-item">
            {userDetail?.email + " | " + userDetail?.phone}
          </p>
        </div>
      </div>
    </Container>
  );
};
