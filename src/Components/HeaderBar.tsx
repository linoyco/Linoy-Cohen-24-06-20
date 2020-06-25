import React from 'react';
import styled from 'styled-components';
import { Brightness4, Favorite, Home } from '@material-ui/icons';

const StyledDiv: any = styled.div`
    background-color: #4E5D89;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const StyledTitle: any = styled.h1`
    margin-left: 1%;
    margin-right: auto;
`;

const StyledIconName: any = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
`;

const StyledDivIcons: any = styled.div`
    display: flex;
    margin-right: 1%;
`;

const HeaderBar: React.FunctionComponent = () => (
    <StyledDiv>
        <StyledTitle>National Current Weather</StyledTitle>
        <StyledDivIcons>
            <StyledIconName><Brightness4 />Mode</StyledIconName>
            <StyledIconName><Favorite />Favorites</StyledIconName>
            <StyledIconName><Home />Home</StyledIconName>
        </StyledDivIcons>
    </StyledDiv>
);

export default HeaderBar;
