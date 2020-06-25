import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Item from '../Components/Item';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const HomePage: React.FunctionComponent = () => {

    return (
        <StyledDiv>
            <TextField label="Search City" type="search" />
            <Item />
        </StyledDiv>
    );
}

export default HomePage;