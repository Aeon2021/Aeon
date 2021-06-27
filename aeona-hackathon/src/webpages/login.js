import React from 'react';
import '../Components/login-page.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, Input, FormGroup, Label
} from 'reactstrap';
const Login = () => {
    return (
        <div className="paddingLeft">
            <Card style={{ backgroundColor: '#e3e3e3', borderColor: '#e3e3e3', width: '30%', heigh: '40%', borderRadius: '20px' }}>
                <div className="center">
                    <h1>AEONA LOGIN</h1>
                    <div>
                        <Form>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 loginPadding" >
                                <Input type="email" name="email" id="exampleEmail" placeholder="USERNAME" style={{height: '45px', borderRadius: '30px', width: '100%'}} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 loginPadding">
                                <Input type="password" name="password" id="examplePassword" placeholder="PASSWORD" style={{height: '45px', borderRadius: '30px', width: '100%'}} />
                            </FormGroup>
                            
                            <div className="loginPadding buttonPadding">
                                <Button style={{height: '45px', borderRadius: '30px', width: '80%', backgroundColor: '#4791ff', borderColor: '#4791ff'}}>SUBMIT</Button>
                            </div>

                        </Form>
                    </div>
                </div>

            </Card>
        </div>

    );
};

export default Login;