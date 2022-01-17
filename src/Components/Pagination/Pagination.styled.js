import styled from 'styled-components';

export const PaginationContainer = styled.div({
    display: 'inline-flex',
});

export const PaginationBox = styled.div`
    flex: 1;
    margin: 0px 5px;
    background: #dde1e7;
    cursor: pointer;    
    border-radius: 3px;
    box-shadow: ${props => props.status === 'active' ? 'inset -3px -3px 7px #ffffff73,inset 3px 3px 5px rgba(94, 104, 121, 0.288)' : '-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288)'};
    font-size: 18px;
    text-decoration: none;
    color: #4d3252;
    height: 45px;
    padding: 0px 8px;
    display: block;
    line-height: 45px;
`