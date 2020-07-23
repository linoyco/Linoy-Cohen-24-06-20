import React from 'react';
import { CardMedia, Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledDiv: any = styled.div`
    .Card{
        background-color: #F1F1F1;
        margin: 1%;
        padding: 0.3rem;
        width: 15vw;
        height: 50vh;
    }

    .CardHeader{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .CardSubHeader{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .Image{

    }
`;

interface IProps {
    day?: string;
    date?: string;
    imageNumber: number;
    iconName: string;
    tempFC?: string;
    locationName?: string;
}

const Item: React.FunctionComponent<IProps> = ({ day, date, imageNumber, iconName, tempFC, locationName }) => (
    <StyledDiv>
        <Card className='Card'>
            <p className='CardHeader'>{day || locationName}</p>
            <p className='CardSubHeader' style={{fontSize: '0.6rem', fontWeight: 'bold'}}>{date}</p>
            <CardMedia className='Image'
                image={require(`../Images/${imageNumber}.png`)}
                title='img'
                style={{ paddingTop: '56%' }}
            />
            <p className='CardSubHeader'>{tempFC}</p>
            <p className='CardSubHeader'>{iconName}</p>
        </Card>
    </StyledDiv>
);

export default Item;