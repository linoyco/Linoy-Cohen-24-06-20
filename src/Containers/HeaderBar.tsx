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
    justify-content: space-between;
    align-items: center;
    align-content: center;

    background-color: #4E5D89;
    color: white;

    .IconName{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 80%;
    }

    .IconsDiv{
        display: flex;
    }

    Button{
        color: white;
    }
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
            <h2>National Current Weather</h2>
            <div className='IconsDiv'>
                <div className='IconName'><Button onClick={changeMode}><Brightness4 /></Button>Mode</div>
                <div className='IconName'><Button onClick={() => navigateToFavorites()}><Favorite /></Button>Favorites</div>
                <div className='IconName'><Button onClick={() => navigateToHome()}><Home /></Button>Home</div>
            </div>
        </StyledDiv>
    );
}
export default HeaderBar;
