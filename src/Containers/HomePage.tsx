import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Item from '../Components/Item';
import { searchingBy } from '../State/Actions/Home/index';

const StyledDiv: any = styled.div`
    margin-left: 1%;
    margin-right: auto;
    width: 100%;
    height: 70%;
`;

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [searchBy, setSearchBy] = React.useState('');

    React.useEffect(() => {
        console.log(searchBy);
        
        dispatch(searchingBy(searchBy));
    }, [searchBy]);

    return (
        <StyledDiv>
            <TextField
                label="Search City"
                type="search"
                value={searchBy}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBy(e.target.value)}
            />
            <Item />
        </StyledDiv>
    );
}

export default HomePage;