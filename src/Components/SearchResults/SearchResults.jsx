import { useState } from "react";
import { Navbar, Card, Container, Nav, Form, Button, FormControl, } from 'react-bootstrap'


const SearchResults = (props) => {


const [selectedVideo, setSelectedVideo] = useState('');

// function getVideoInfo()

    return ( 
        <div>
        {props.videosId.map((video, index) => {
            return (
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
                            <Card.Body>
                                <Card.Title>{video.snippet.title}</Card.Title>
                                <Button variant="primary" onClick={() => props.selectedVideoId(video)}>Watch</Button>
                            </Card.Body>
                    </Card>
                     <br/>
                </div>
            )
            
        })}
        </div>
     );
}
 
export default SearchResults;