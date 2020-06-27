import React from 'react';
import styled from 'styled-components';
import { CardMedia, Card, CardContent, CardHeader } from '@material-ui/core';

const StyledItemsDiv: any = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80%;
    border: 2px solid yellow;
`;

// const StyledOneItem: any = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     height: 60%;
//     width: 15%;
//     border: 1px solid black;
//     margin: 1%;
// `;

const Item: React.FunctionComponent = () => {

    return (
        <StyledItemsDiv>
            <Card style={{ width: '15%', height: '70%', margin: '1%' }}>
                <CardHeader
                    title="Day"
                    subheader="27/06/2020"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
                <CardMedia
                    image={require('../Images/' + 5 + '.png')}
                    title='Paella dish'
                    style={{ height: 0, paddingTop: '56%' }}
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    Sunny
      </CardContent>
            </Card>





            <Card style={{ width: '15%', height: '70%', margin: '1%' }}>
                <CardHeader
                    title="Day"
                    subheader="27/06/2020"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
                <CardMedia
                    image={require('../Images/' + 5 + '.png')}
                    title='Paella dish'
                    style={{ height: 0, paddingTop: '56%' }}
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    Sunny
      </CardContent>
            </Card>
            <Card style={{ width: '15%', height: '70%', margin: '1%' }}>
                <CardHeader
                    title="Day"
                    subheader="27/06/2020"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
                <CardMedia
                    image={require('../Images/' + 5 + '.png')}
                    title='Paella dish'
                    style={{ height: 0, paddingTop: '56%' }}
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    Sunny
      </CardContent>
            </Card>
            <Card style={{ width: '15%', height: '70%', margin: '1%' }}>
                <CardHeader
                    title="Day"
                    subheader="27/06/2020"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
                <CardMedia
                    image={require('../Images/' + 5 + '.png')}
                    title='Paella dish'
                    style={{ height: 0, paddingTop: '56%' }}
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    Sunny
      </CardContent>
            </Card>
            <Card style={{ width: '15%', height: '70%', margin: '1%' }}>
                <CardHeader
                    title="Day"
                    subheader="27/06/2020"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
                <CardMedia
                    image={require('../Images/' + 5 + '.png')}
                    title='Paella dish'
                    style={{ height: 0, paddingTop: '56%' }}
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    Sunny
      </CardContent>
            </Card>




        </StyledItemsDiv>
    );
}

export default Item;