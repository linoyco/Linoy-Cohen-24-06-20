import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Item from '../Components/Item';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const StyledItemsDiv: any = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
`;

export interface IFavoritesDetails {
    city: string;
    locationKey: string;
    imageNumber: number;
    tempFC: number;
    iconName: string;
}

const FavoritesPage: React.FunctionComponent = () => {

    const localFavoritesList: Array<IFavoritesDetails> = useSelector((state: any) => state.favorites.favoritesDetailsList);

    const mapListToCards = () => {
        if (localFavoritesList.length === 0) return <div style={{ fontSize: '2vw' }}>No Favorites</div>;
        return localFavoritesList.map(favorite =>
            <Item
                key={favorite.locationKey}
                locationName={favorite.city}
                imageNumber={favorite.imageNumber}
                iconName={favorite.iconName}
                tempFC={`${favorite.tempFC}°C`}
            />
        );
    }

    return (
        <StyledDiv>
            <h1 style={{ fontSize: '3vw' }}>My Favorites: </h1>
            <StyledItemsDiv>
                {/* {mapListToCards()} */}
                <Item
                    locationName={'city'}
                    imageNumber={5}
                    iconName={'iconName'}
                    tempFC={'`${tempFC}°C`'}
                />

                <Item
                    locationName={'city'}
                    imageNumber={5}
                    iconName={'iconName'}
                    tempFC={'`${tempFC}°C`'}
                />

                <Item
                    locationName={'city'}
                    imageNumber={5}
                    iconName={'iconName'}
                    tempFC={'`${tempFC}°C`'}
                />

                <Item
                    locationName={'city'}
                    imageNumber={5}
                    iconName={'iconName'}
                    tempFC={'`${tempFC}°C`'}
                />
            </StyledItemsDiv>
        </StyledDiv>
    );
}

export default FavoritesPage;
