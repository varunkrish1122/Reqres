import styled from 'styled-components';

export const Card = styled.div({
    padding: 16,
    margin: 16,
    width: '95%',
    boxShadow: '2px 2px 6px 1px #e3d0d0',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

export const CardHeader = styled.div({
    display: 'flex',
    flexWrap: 'nowrap',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const SearchInput = styled.input`
    width: 50%;
    border: 1px solid #7e7e83;
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    &:focus {
        border: 2px solid #d5d5e9 !important;
        box-shadow: 2px 2px 8px 2px #ebebef;
    }
`

export const CardContent = styled.div({});

export const CardFooter = styled.div({
    alignSelf: 'center'
});
export const StyledTable = styled.ul({});
export const StyledRow = styled.li`
    border-radius: 3px;
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    background-color: ${(props) => props.type === 'header' ? '#95A5A6' : '#ffffff'};
    font-size: ${(props) => props.type === 'header' ? '14px' : 'inherit'};
    text-transform: ${(props) => props.type === 'header' ? 'uppercase' : 'inherit'};
    letter-spacing: ${(props) => props.type === 'header' ? '0.03em' : 'inherit'};
    cursor: ${(props) => props.type === 'row' ? 'pointer' : 'inherit'};
    align-items: center;
    border: 1px solid #ededed;
    &:hover{
        box-shadow: ${(props) => props.type === 'row' ? '0px 0px 9px 0px rgba(0,0,0,0.1)' : 'none'};
    }
    @media all and (max-width: 767px) {
        display: ${(props) => props.type === 'header' ? 'none' : 'block'};
    }
`

export const StyledCol = styled.div`
flex-basis:  ${(props) => props.column === 1 ? '10%' : props.column === 2 ? '45%' : props.column === 3 ? '45%' : 'none'};
@media all and (max-width: 767px) {
        display: flex;
        padding: 10px 0;
        flex-basis: 100%;
        justify-content: center;
        &:before {
            color: #6C7A89;
            padding-right: 10px;
            content: attr(data-label);
            flex-basis: 50%;
            text-align: right;
        }
}
`