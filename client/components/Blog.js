import React from 'react';
import {Grid, Row, Button, Col, Thumbnail} from 'react-bootstrap';

export default class Blog extends React.Component {

  render() {

    return (
      <Grid>
     <Row>
     <Col xs={6} md={4}>
       <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
         <h3>Thumbnail label</h3>
         <p>Description</p>
         <p>
           <Button bsStyle="primary">Button</Button>&nbsp;
           <Button bsStyle="default">Button</Button>
         </p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={4}>
       <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
         <h3>Thumbnail label</h3>
         <p>Description</p>
         <p>
           <Button bsStyle="primary">Button</Button>&nbsp;
           <Button bsStyle="default">Button</Button>
         </p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={4}>
       <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
         <h3>Thumbnail label</h3>
         <p>Description</p>
         <p>
           <Button bsStyle="primary">Button</Button>&nbsp;
           <Button bsStyle="default">Button</Button>
         </p>
       </Thumbnail>
     </Col>
     </Row>
   </Grid>
    );
  }
}
