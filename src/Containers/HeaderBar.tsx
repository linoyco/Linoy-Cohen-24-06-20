import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Brightness4, Favorite, Home } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import * as Routes from '../Lib/Routes';
import { changeModeStyle } from '../State/Actions/App';

const StyledDiv: any = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    background-color: #4E5D89;
    color: white;
    width: 100%;
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

const HeaderBar: React.FunctionComponent = () => {

    const history = useHistory();
    const mode: string = useSelector((state: any) => state.app.mode);
    const dispatch: Dispatch = useDispatch();

    const navigateToFavorites = () => {
        history.push(Routes.FAVORITES);
    }

    const navigateToHome = () => {
        history.push(Routes.HOME);
    }

    const changeMode = () => {
        mode === 'light' ? dispatch(changeModeStyle('dark')) : dispatch(changeModeStyle('light'));
    }

    return (
        <StyledDiv>
            <StyledTitle>National Current Weather</StyledTitle>
            <StyledDivIcons>
                <StyledIconName><Button onClick={changeMode} style={{ color: 'white' }}><Brightness4 /></Button>Mode</StyledIconName>
                <StyledIconName><Button onClick={() => navigateToFavorites()} style={{ color: 'white' }}><Favorite /></Button>Favorites</StyledIconName>
                <StyledIconName><Button onClick={() => navigateToHome()} style={{ color: 'white' }}><Home /></Button>Home</StyledIconName>
            </StyledDivIcons>
        </StyledDiv>
    );
}
export default HeaderBar;
