import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Item from '../Components/Item';
import { FETCH_CURRENT_WEATHER } from '../State/Actions/Favorites/types';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const StyledItemsDiv: any = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80%;
`;

export interface IFavoritesDetails {
    city: string;
    locationKey: string;
    id: number;
    imageNumber?: number;
    tempFC?: number;
    iconName?: string;
}

const FavoritesPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();


    const localFavoritesList: IFavoritesDetails = useSelector((state: any) => state.favorites.favoritesDetailsList);

    React.useEffect(() => {
        // dispatch({ type: FETCH_CURRENT_WEATHER });
        console.log(localFavoritesList);
    });

    return (
        <StyledDiv>
            FavoritesPage
            <StyledItemsDiv>

            </StyledItemsDiv>
        </StyledDiv>
    );
}

export default FavoritesPage;
