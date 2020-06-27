import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Item from '../Components/Item';
import { searchingBy } from '../State/Actions/Home/index';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IAutocompleteOBJ } from '../Api/apiObjects';


const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [searchBy, setSearchBy] = React.useState('');
    const [localAutocompleteList, setLocalAutocompleteList] = React.useState<Array<string>>([]);

    const autocomplete: Array<IAutocompleteOBJ> = useSelector((state: any) => state.home.autocompleteList);

    React.useEffect(() => {
        dispatch(searchingBy(searchBy));
    }, [searchBy]);

    React.useEffect(() => {
        let container: Array<string> = [];
        for (let i of autocomplete) {
            container.push(i.LocalizedName);
        }
        setLocalAutocompleteList(container);
    }, [autocomplete]);

    return (
        <StyledDiv>
            <Autocomplete
                options={localAutocompleteList}
                renderInput={(searchBy) => <TextField {...searchBy}
                    label='Search City'
                    value={searchBy}
                    style={{ width: '30%' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBy(e.target.value)}
                />}
            />
            <Item />
        </StyledDiv>
    );
}

export default HomePage;