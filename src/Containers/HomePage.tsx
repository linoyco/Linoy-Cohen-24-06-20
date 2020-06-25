import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { FavoriteBorder } from '@material-ui/icons';

const StyledDiv: any = styled.div`
    display: flex;
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
`;

// const StyledFavoriteIcon: any = styled(FavoriteBorder)`
//     margin-left: auto;
//     margin-right: 1%;
// `;

const StyledIconName: any = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: 3%;
`;

const HomePage: React.FunctionComponent = () => {

    return (
        <StyledDiv>
            <TextField label="Search City" type="search" />
            <StyledIconName><FavoriteBorder />Add to favorites</StyledIconName>
        </StyledDiv>

    );
}

export default HomePage;