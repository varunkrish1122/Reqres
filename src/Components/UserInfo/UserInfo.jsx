import React from 'react';

import { Popup, ModalWrapper, StyledImage, DetailsWrapper, DetailsColumn, DetailsRow, StaticText, StyledButton, ButtonWrapper } from './UserInfo.styled';

const UserInfo = ({first_name, last_name, avatar, email, setShowModal}) => {
    return <ModalWrapper>
        <Popup>
            <DetailsWrapper>
                <DetailsColumn>
                    <DetailsRow>
                        <StaticText>First Name:</StaticText>
                        <div>{first_name}</div>
                    </DetailsRow>
                    <DetailsRow>
                        <StaticText>Last Name:</StaticText>
                        <div>{last_name}</div>
                    </DetailsRow>
                    <DetailsRow>
                        <StaticText>Email:</StaticText>
                        <div>{email}</div>
                    </DetailsRow>
                </DetailsColumn>
                <StyledImage src={avatar} />
            </DetailsWrapper>
            <ButtonWrapper onClick={() => setShowModal(false)}>
                <StyledButton>Ok</StyledButton>
            </ButtonWrapper>
        </Popup>
    </ModalWrapper>
};

export default UserInfo;