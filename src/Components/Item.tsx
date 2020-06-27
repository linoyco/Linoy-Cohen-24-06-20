import React from 'react';
import styled from 'styled-components';
import { FavoriteBorder } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const StyledDiv: any = styled.div`
    display: flex;
    height: 30%;
    margin-top: 1%;
`;

const StyledIconName: any = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: 3%;
`;

const StyledDetails: any = styled.div`
    margin-left: 5%;
`;

const StyledItemsDiv: any = styled.div`
    display: flex;
    height: 70%;
`;

const StyledOneItem: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 15%;
    border: 1px solid black;
    margin: 1%;
`;

const Item: React.FunctionComponent = () => {

    const defaultLocation = useSelector((state: any) => state.app.location);

    return (
        <div style={{ height: '100%' }}>
            <StyledDiv>
                <StyledDetails><p>{defaultLocation}<br />38 C</p></StyledDetails>
                <StyledIconName><FavoriteBorder />Add to favorites</StyledIconName>
            </StyledDiv>
            <StyledItemsDiv>
                <StyledOneItem ><p>tt</p><p>rr</p><p>ff</p></StyledOneItem>
                <StyledOneItem ><p>tt</p><p>rr</p><p>ff</p></StyledOneItem>
                <StyledOneItem ><p>tt</p><p>rr</p><p>ff</p></StyledOneItem>
                <StyledOneItem ><p>tt</p><p>rr</p><p>ff</p></StyledOneItem>
                <StyledOneItem ><p>tt</p><p>rr</p><p>ff</p></StyledOneItem>
            </StyledItemsDiv>
        </div>
    );
}

export default Item;