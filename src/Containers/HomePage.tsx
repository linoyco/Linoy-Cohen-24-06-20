import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Item from '../Components/Item';
import { searchingBy, searchByCity } from '../State/Actions/Home/index';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IAutocompleteOBJ, IFiveDaysWeatherOBJ } from '../Api/apiObjects';
import { FavoriteBorder } from '@material-ui/icons';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const StyledSecDiv: any = styled.div`
    display: flex;
    height: 30%;
    margin-top: 1%;
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

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [searchBy, setSearchBy] = React.useState('');
    const [localAutocompleteList, setLocalAutocompleteList] = React.useState<Array<{ city: string, key: string }>>([]);

    const autocomplete: Array<IAutocompleteOBJ> = useSelector((state: any) => state.home.autocompleteList);
    const fiveDays: IFiveDaysWeatherOBJ = useSelector((state: any) => state.home.fiveDaysWeather);

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
        console.log(fiveDays);

    }, [fiveDays]);

    const handleSelectCity = (e: string) => {
        setSearchBy(e);
        let locationKey = '215854';
        // for (let i of localAutocompleteList) {
        //     if (e === i.city) {
        //         locationKey = i.key;
        //         console.log(i.key);

        //     } else {
        //         return;
        //     }
        // }
        //call action 5 days
        // dispatch(searchByCity(locationKey, false));
        dispatch(searchByCity(locationKey, false));
    }

    return (
        <StyledDiv>
            <Autocomplete
                options={localAutocompleteList}
                getOptionLabel={(option) => option.city}
                onSelect={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectCity(e.target.value)}
                renderInput={(searchBy) => <TextField {...searchBy}
                    label='Search City'
                    value={searchBy}
                    style={{ width: '30%' }}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBy(e.target.value)}
                />}
            />
            <StyledSecDiv>
                <StyledDetails><p>{'defaultLocation'}<br />38 C</p></StyledDetails>
                <StyledIconName><FavoriteBorder />Add to favorites</StyledIconName>
            </StyledSecDiv>
            <Item />
        </StyledDiv>
    );
}

export default HomePage;