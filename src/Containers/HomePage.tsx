import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Item from '../Components/Item';
import { searchingBy, searchByCity, changeTempMode } from '../State/Actions/Home/index';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IAutocompleteOBJ, IFiveDaysWeatherOBJ, IDailyForecastsOBJ } from '../Api/apiObjects';
import { FavoriteBorder } from '@material-ui/icons';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { setLocation } from '../State/Actions/App';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const StyledSecDiv: any = styled.div`
    display: flex;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
    height: 20%;
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
    justify-content: space-around;
    height: 80%;
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
    const [localFiveDaysList, setLocalFiveDaysList] = React.useState<Array<fiveDaysCardDetails>>([]);
    const [localAutocompleteList, setLocalAutocompleteList] = React.useState<Array<{ city: string, key: string }>>([]);

    const autocomplete: Array<IAutocompleteOBJ> = useSelector((state: any) => state.home.autocompleteList);
    const fiveDays: IFiveDaysWeatherOBJ = useSelector((state: any) => state.home.fiveDaysWeather);
    const localFCMode: boolean = useSelector((state: any) => state.home.fCMode);
    const localLocation = useSelector((state: any) => state.app.locationDetails);

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

    const mapFiveDaysToList = () => {
        let myList: Array<fiveDaysCardDetails> = [];

        fiveDays.DailyForecasts.map((day) => {
            let myObj: fiveDaysCardDetails = {
                date: moment.parseZone(day.Date).format("MM/DD/YYYY"),
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
        //לבדוק שליחה של עיר שהיא לא תא
        console.log(value.city, value.key);
        dispatch(searchByCity(value.key, localFCMode));
    }

    return (
        <StyledDiv>
            <StyledSecDiv>
                <Autocomplete
                    blurOnSelect
                    options={localAutocompleteList}
                    getOptionLabel={(option) => option.city}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBy(e.target.value)}
                    onChange={(event: any, value) => {
                        if (value)
                            handleChangeAndSelect(value)
                    }}
                    renderInput={(searchBy) => <TextField {...searchBy}
                        label='Search City'
                        value={searchBy}
                        style={{ width: '300%' }}
                    />}
                />
            </StyledSecDiv>
            <StyledSecDiv>
                <StyledDetails><p>{localLocation.locationName}<br /></p></StyledDetails>
                <StyledIconName><Button><FavoriteBorder /></Button>Add to favorites</StyledIconName>
            </StyledSecDiv>
            <Button onClick={() => handleFCMode()}>F\C</Button>
            <StyledItemsDiv>
                {mapFiveDaysToCard()}
            </StyledItemsDiv>
        </StyledDiv>
    );
}

export default HomePage;