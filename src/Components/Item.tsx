import React from 'react';
import { CardMedia, Card, CardContent, CardHeader, Typography } from '@material-ui/core';

interface IProps {
    day?: string;
    date?: string;
    imageNumber: number;
    iconName: string;
    tempFC?: string;
    locationName?: string;
}

const Item: React.FunctionComponent<IProps> = ({ day, date, imageNumber, iconName, tempFC, locationName }) => (
    <Card style={{ height: '87%', width: '15%' }}>
        <CardHeader
            title={
                <Typography style={{ fontSize: '2vw', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {day || locationName}
                </Typography>
            }
            subheader={
                <Typography style={{ fontSize: '1.5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {date}
                </Typography>
            }
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        />
        <CardMedia
            image={require(`../Images/${imageNumber}.png`)}
            title='img'
            style={{ paddingTop: '55%' }}
        />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>
                {tempFC}
            </Typography>
            <Typography style={{ fontSize: '1.5vw' }}>
                {iconName}
            </Typography>
        </CardContent>
    </Card>
);

export default Item;