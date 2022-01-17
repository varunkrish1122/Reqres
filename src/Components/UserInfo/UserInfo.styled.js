import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: visible;
    &:target {
        visibility: visible;
        opacity: 1;
      }
`

export const StyledButton = styled.button`
    border: none;
    background-color: #1cc51c;
    padding: 8px 24px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: green;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 8px;
`

export const Popup = styled.div`
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
`

export const DetailsWrapper = styled.div`
    padding: 8px;
    display: flex;
`

export const DetailsColumn = styled.div`
    flex-basis: 70%;
`

export const DetailsRow = styled.div`
    display: flex;
    padding: 8px 0;
`

export const StaticText = styled.div`
    flex-basis: 35%;
    color: #b3b1b1;
`

export const StyledImage = styled.img`

`