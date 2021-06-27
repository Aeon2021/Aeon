import React from 'react';
import '../Components/grid-page.css';
import { Container, Row, Col } from 'reactstrap';

import ManOnPlank from '../Assets/GridPhotos/man-on-plank.jpeg';
import MountainRock from '../Assets/GridPhotos/mountain-rock.jpeg';
import Mountain from '../Assets/GridPhotos/mountain.jpeg';
import Person4 from '../Assets/GridPhotos/4-person-family.jpeg';

import JeansFamily from '../Assets/GridPhotos/jeans-family.jpeg';
import Lavender from '../Assets/GridPhotos/lavendar-fields.jpeg';
import PeaceWoman from '../Assets/GridPhotos/peace-woman.jpeg';

import SnowyHighs from '../Assets/GridPhotos/snowwy-highs.jpeg';
import SnowwyRelf from '../Assets/GridPhotos/snowwy-reflection.jpeg';
import ChildMount from '../Assets/GridPhotos/mountain-child.jpeg';

const Dashboard = () => {
    return (
        <Container>

        <h1> ❤---------- YOUR MEMORIES ----------❤</h1>

        <Row xs="4" sm="3" className="gridPadding">
          <Col><img src={ManOnPlank} width="100%" style={{ borderRadius: "20px" }}/></Col>
          <Col><img src={MountainRock} width="100%" style={{ borderRadius: "20px" }}/></Col>
          <Col><img src={Mountain} width="100%" style={{ borderRadius: "20px" }}/></Col>
        </Row>

        <Row xs="4" className="gridPadding">
          <Col><img src={JeansFamily} width="100%" style={{ borderRadius: "20px" }}/></Col>
          <Col><img src={Lavender} width="100%" style={{ borderRadius: "20px" }}/></Col>
          <Col><img src={PeaceWoman} width="100%" style={{ borderRadius: "20px" }}/></Col>
          <Col><img src={SnowyHighs} width="100%" style={{ borderRadius: "20px" }}/></Col>
        </Row>


        <Row xs="4" sm="3" className="gridPadding">
            <Col><img src={Person4} width="100%" style={{ borderRadius: "20px" }}/></Col>
            <Col><img src={SnowwyRelf} width="100%" style={{ borderRadius: "20px" }}/></Col>
            <Col><img src={ChildMount} width="100%" style={{ borderRadius: "20px" }}/></Col>
        </Row>  

      </Container>
    );
};
export default Dashboard;