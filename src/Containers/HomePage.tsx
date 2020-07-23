import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteBorder, DeleteOutline } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import moment from 'moment';

import Item from '../Components/Item';
import { searchingBy, searchByCity, changeTempMode, setIsFavorite } from '../State/Actions/Home/index';
import { IAutocompleteOBJ, IFiveDaysWeatherOBJ } from '../Api/apiObjects';
import { setLocation } from '../State/Actions/App';
import * as commonValidator from '../Lib/commonValidator';
import { sendToFavorites, sendRemoveFavorite } from '../State/Actions/Favorites';
import { IFavoritesDetails } from './FavoritesPage';

const StyledDiv: any = styled.div`
    margin: 1rem;
    height: 85vh;

    .SecDiv{
        display: flex;
        align-items: center;
    }

    .IconDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
    }

    .WeatherDiv{
        display: flex;
        justify-content: space-around;
        height: 55vh; 
        padding: 1rem;
    }

    .City{
        font-weight: bold;
    }
`;

interface fiveDaysCardDetails {
    day: string;
    date: string;
    imageNumber: number;
    iconName: string;
    tempFC: number;
}

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [searchBy, setSearchBy] = React.useState('');
    const [errorValidation, setErrorValidation] = React.useState('');
    const [localFiveDaysList, setLocalFiveDaysList] = React.useState<Array<fiveDaysCardDetails>>([]);
    const [localAutocompleteList, setLocalAutocompleteList] = React.useState<Array<{ city: string, key: string }>>([]);

    const autocomplete: Array<IAutocompleteOBJ> = useSelector((state: any) => state.home.autocompleteList);
    const fiveDays: IFiveDaysWeatherOBJ = useSelector((state: any) => state.home.fiveDaysWeather);
    const localFCMode: boolean = useSelector((state: any) => state.home.fCMode);
    const localLocation = useSelector((state: any) => state.app.locationDetails);
    const localFavoritesList: Array<IFavoritesDetails> = useSelector((state: any) => state.favorites.favoritesDetailsList);
    const isFavorite: boolean = useSelector((state: any) => state.home.isFavorite);

    React.useEffect(() => {
        if (localLocation.locationKey !== '') {
            dispatch(searchByCity(localLocation.locationKey, localFCMode));
        }
    }, [localLocation.locationKey]);

    React.useEffect(() => {
        dispatch(searchingBy(searchBy));
    }, [searchBy]);

    React.useEffect(() => {
        let container: Array<{ city: string, key: string }> = [];
        for (let i of autocomplete) {
            container.push({ city: i.LocalizedName, key: i.Key });
        }
        setLocalAutocompleteList(container);
    }, [autocomplete]);

    React.useEffect(() => {
        mapFiveDaysToList();
    }, [fiveDays]);

    React.useEffect(() => {
        for (let value of localFavoritesList) {
            if (value.locationKey === localLocation.locationKey) {
                console.log(value.locationKey, localLocation.locationKey);

                dispatch(setIsFavorite(true));
            }
            else dispatch(setIsFavorite(false));
        }
    }, []);

    const checkIfFavorite = (value: string) => {
        localFavoritesList.map(favorite => {
            if (value === favorite.locationKey) {
                dispatch(setIsFavorite(true));
            }
            else dispatch(setIsFavorite(false));
        });
    }

    const mapFiveDaysToList = () => {
        let myList: Array<fiveDaysCardDetails> = [];

        fiveDays.DailyForecasts.map((day) => {
            let myObj: fiveDaysCardDetails = {
                date: moment.parseZone(day.Date).format("DD/MM/YYYY"),
                day: moment(day.Date).format('dddd'),
                imageNumber: day.Day.Icon,
                iconName: day.Day.IconPhrase,
                tempFC: day.Temperature.Minimum.Value
            }
            myList.push(myObj);
        },
            setLocalFiveDaysList(myList));
        mapFiveDaysToCard();
    }

    const mapFiveDaysToCard = () => {
        if (localFiveDaysList.length === 0) return <div></div>;
        return localFiveDaysList.map((day, idx) =>
            <Item
                key={idx}
                date={day.date}
                day={day.day}
                imageNumber={day.imageNumber}
                iconName={day.iconName}
                tempFC={localFCMode ? `${day.tempFC}°C` : `${day.tempFC}°F`}
            />
        );
    }

    const handleFCMode = () => {
        localFCMode ? dispatch(changeTempMode(localLocation.locationKey, false)) : dispatch(changeTempMode(localLocation.locationKey, true));
    }

    const handleChangeAndSelect = (value: { city: string, key: string }) => {
        dispatch(setLocation(value.key, value.city));
        dispatch(searchByCity(value.key, localFCMode));
    }

    const checkValidation = (value: string) => {
        setSearchBy(value);
        let isValide = true;
        const userSchema = commonValidator.userSchema;
        let error = '';

        if (value) {
            const searchObj = userSchema.search.validate(value);
            if (searchObj.error) {
                error = searchObj.error.message;
                isValide = false;
            }
        }
        (!isValide) ? setErrorValidation(error) : setErrorValidation('');
    }

    const handleAddFavoriteClicked = () => {
        dispatch(setIsFavorite(true));
        dispatch(sendToFavorites(localLocation.locationKey, localLocation.locationName));
    }

    const handleRemoveFavoriteClicked = () => {
        dispatch(setIsFavorite(false));
        dispatch(sendRemoveFavorite(localLocation.locationKey));
    }

    const favoriteButton = !isFavorite ? <p className='IconDiv'><Button onClick={() => handleAddFavoriteClicked()}><FavoriteBorder /></Button>Add to favorites</p> :
        <p className='IconDiv'><Button onClick={() => handleRemoveFavoriteClicked()}><DeleteOutline /></Button>Remove from favorites</p>;

    return (
        <StyledDiv>
            <div className='SecDiv'>
                <Autocomplete
                    blurOnSelect
                    options={localAutocompleteList}
                    getOptionLabel={(option) => option.city}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => checkValidation(e.target.value)}
                    onChange={(event: any, value) => {
                        if (value) {
                            handleChangeAndSelect(value);
                            checkIfFavorite(value.key);
                            for (let i = 0; i < localFavoritesList.length; i++) {
                                value.city === localFavoritesList[i].city ?
                                    dispatch(setIsFavorite(true)) : dispatch(setIsFavorite(false));
                            }
                        }
                    }}
                    renderInput={(searchBy) => <div>
                        <p className='hhFWoK'>{errorValidation}</p>
                        <TextField {...searchBy}
                            label='Search'
                            value={searchBy}
                            style={{ width: '20vw' }}
                        />
                    </div>}
                />{favoriteButton}
            </div>
            <div className='City'>{localLocation.locationName}</div><br />
            <Button onClick={() => handleFCMode()}>F\C</Button>
            <div className='WeatherDiv'>
                {mapFiveDaysToCard()}
            </div>
        </StyledDiv>
    );
}

export default HomePage;