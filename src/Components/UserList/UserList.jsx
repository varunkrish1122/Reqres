import React, { useState } from "react";

import { StyledRow, StyledCol } from "../UsersList/UsersList.styled";
import { StyledImage } from "./UserList.styled";
import UserInfo from "../UserInfo/UserInfo";

const UserList = ({ id, first_name, last_name, avatar, email }) => {
  const [showModal, setShowModal] = useState(false)
  const name = `${first_name} ${last_name}`;
  const onClickHandler = () => {
    setShowModal(true);
  }
  return (
    <>
    <StyledRow type="row" onClick={onClickHandler}>
      <StyledCol column={1}>
        <StyledImage src={avatar} />
      </StyledCol>
      <StyledCol column={2}>{name}</StyledCol>
      <StyledCol column={3}>{email}</StyledCol>
    </StyledRow>
    {showModal && <UserInfo first_name={first_name} last_name={last_name} avatar={avatar} email={email} setShowModal={setShowModal} />}
    </>
  );
};

export default UserList;
