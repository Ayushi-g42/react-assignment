import React, { useState } from "react";
import { Container } from "./style";
import { Modal } from "../modal/Modal";

export const Posts = (props) => {
  const { data } = props;
  const [isModalOpen, setModalOpen] = useState(null);

  return (
    <Container>
      {data?.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              className="post-wrap"
              key={`post-${index}`}
              onClick={() => setModalOpen(item)}
            >
              <p className="title single-line">{item.title}</p>
              <p className="text three-line">{item.body}</p>
            </div>
          );
        })}
      {isModalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
        >
          <p className="title">{isModalOpen.title}</p>
          <p className="text">{isModalOpen.body}</p>
        </Modal>
      )}
    </Container>
  );
};
