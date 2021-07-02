import React, {Component} from "react"
import {
  Container,
  Col,
  Row,
  Navbar,
  Breadcrumb,
  Carousel, 
  Form, 
  Image, 
  Figure, 
  Jumbotron, 
  ListGroup,
  Button,
  DropdownButton,
  Dropdown,
  Media
} from 'react-bootstrap';

class App extends Component{
  render(){
    return(
      
      <Container fluid>
        <Navbar bg="dark">
          <Col >
            <DropdownButton title="Pilih Bahasa">
              <Dropdown.Item href="/">Indonesia</Dropdown.Item>
              <Dropdown.Item href="/">Inggris</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col sm={8}></Col>
          <Col >
            <Figure >
              <Row className="justify-content-md-center">
                <Figure.Image
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  width={30}
                  height={30}
                />
              </Row>
              <Row className="justify-content-md-center">
                <Figure.Caption>
                  Wiladhianty
                </Figure.Caption>
              </Row>
            </Figure>
          </Col>
        </Navbar>
        <Col md={{ span: 6, offset: 8 }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="1"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="2"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="3"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <br/>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main untuk Catulunya, Gerard Pique Minta dihormati</p>
              <Button type="primary">Read More</Button>
            </Jumbotron>
          </Col>

          <Col >
            <Row className="justify-content-md-center">
              <Image
                width={100}
                height={100}
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                roundedCircle
              />
              
            </Row>
            <Row className="justify-content-md-center">
              <h5>Silahkan Login</h5>
            </Row>
            
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Masukan Email"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Term & Condition"/>
              </Form.Group>
              <Button variant="primary" type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
