import React from 'react';
import { CardMedia, Card, CardContent, CardHeader } from '@material-ui/core';

interface IProps {
    day: string;
    date: string;
    imageNumber: number;
    iconName: string;
}

const Item: React.FunctionComponent<IProps> = ({ day, date, imageNumber, iconName }) => (
    <Card style={{ height: '70%', margin: '1%' }}>
        <CardHeader
            title={day}
            subheader={date}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        />
        <CardMedia
            image={require(`../Images/${imageNumber}.png`)}
            title='img'
            style={{ height: 0, paddingTop: '56%' }}
        />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>{iconName}</CardContent>
    </Card>
);

export default Item;