import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const UserListItem = (props) => {
  const { item, postData } = props;
  const router = useNavigate();

  const total_post = postData?.filter((i) => i?.userId == item?.id);

  return (
    <Container onClick={() => router(`/user/${item.id}`)}>
      <p className="text">{item?.name}</p>
      <p className="text">Posts : {total_post?.length}</p>
    </Container>
  );
};
