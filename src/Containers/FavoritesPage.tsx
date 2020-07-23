import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Item from '../Components/Item';

const StyledDiv: any = styled.div`
    padding: 1rem;

    .ItemsDiv{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

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
            <h2>My Favorites: </h2>
            <div className='ItemsDiv'>
                {mapListToCards()}
            </div>
        </StyledDiv>
    );
}

export default FavoritesPage;
