import React from 'react';
import { CardMedia, Card, CardContent, CardHeader } from '@material-ui/core';

interface IProps {
    day?: string;
    date?: string;
    imageNumber: number;
    iconName: string;
    tempFC?: string;
    locationName?: string;
}

const Item: React.FunctionComponent<IProps> = ({ day, date, imageNumber, iconName, tempFC, locationName }) => (
    <Card style={{ height: '85%', margin: '1%' }}>
        <CardHeader
            title={day || locationName}
            subheader={date}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        />
        <CardMedia
            image={require(`../Images/${imageNumber}.png`)}
            title='img'
            style={{ height: 0, paddingTop: '56%' }}
        />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>{tempFC}</CardContent>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>{iconName}</CardContent>
    </Card>
);

export default Item;