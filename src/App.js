import React, {useState} from 'react';

import './App.css';

import {Container, ListGroup, Navbar, Nav, Button} from 'react-bootstrap';
import Story from './Story';
import useFetchNews from './useFetchNews';


function App() {
  const [topic,setTopic] = useState('world');
  const { news,loading,error } = useFetchNews(topic);
  
  return (
    <Container>
      <h1 className="h1 text-center">Top Stories App</h1>
      <Container>
        <Navbar variant="dark" bg="dark">
          <Nav className="mr-auto">
            <Button variant="outline-light" onClick={()=>{setTopic('world')}}>World</Button>
            <Button variant="outline-light" onClick={()=>{setTopic('home')}}>Home</Button>
            <Button variant="outline-light" onClick={()=>{setTopic('us')}}>USA</Button> 
          </Nav>
        </Navbar>
      </Container>
      <Container>
        
        {loading && <h1>Loading</h1>}
        {error && <h1>Error. Hit refresh</h1>}
        <ListGroup>
          {
            news.results && (news.results.map((res,idx) => <Story key={idx} {...res}/>))
          }
        </ListGroup>
        {console.log(news)}
      </Container>
    </Container>
    
      
  );
}

export default App;
