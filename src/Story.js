import React from 'react';
import { Card } from 'react-bootstrap';

const Story = ({abstract, byline, created_date, multimedia,title ,short_url}) => {
    const image_url = multimedia[multimedia.length-2].url;
    const date = new Date(created_date);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const months = {0: "Jan", 1: "Feb", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "Aug", 8: "Sept", 9: "Oct", 10: "Nov", 11: "Dec"};
    const monthName = months[month];
    return ( 
        <Card className="mb-4 crd row">
            <div className="left col-sm-12">
                <Card.Title className="mb-2">{title}</Card.Title>
                <Card.Subtitle className="mb-2">{byline}</Card.Subtitle>
                <Card.Subtitle className="mb-2">{`${day} ${monthName} ${year}`}</Card.Subtitle>
                <Card.Text className="mb-2">{abstract}</Card.Text>
                <Card.Link href={short_url} target="_blank" className="mb-2">View Full News</Card.Link>
            </div>
            <div className="right col-sm-12">
                <Card.Img src={image_url}/>
            </div>
            
        </Card>
    );
}
 
export default Story;