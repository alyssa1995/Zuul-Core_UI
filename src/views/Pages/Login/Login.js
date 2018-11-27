import React, { Component } from 'react';
import { CardGroup, CardBody, Card, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}


class Login extends Component {
  render() {
    return (
      

      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="text-white py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Login if you dare</h2>
                      <img src="https://s3.amazonaws.com/whatif-assets-cdn/images/asset_1+copy2.png" alt="zuul logo" id="zuul_logo" className="mx-auto d-block rounded img-avatar"/>
                      <Link to="/dashboard">
                          <GoogleLogin
                            clientId="24656564867-3issjp4bq0gsr05banuomnniilngiicc.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                          />                     
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Login;
