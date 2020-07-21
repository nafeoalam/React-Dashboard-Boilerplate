import AuthForm, { STATE_LOGIN } from './_AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

import UserForm from "../UserForm/_UserForm";
import { Grid } from '@material-ui/core';


function AuthPage(props) {

  //const AuthContextVal = useContext(AuthContext);

  const handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      props.history.push('/seed');
    } else {
      props.history.push('/signup');
    }
  };

  const handleLogoClick = () => {
    props.history.push('/');
  };
  return (
    <Row
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Col md={6} lg={4} 
      style={{
        margin: '10%'
      }}
      >
        <Card body>
          <UserForm />
        </Card>
      </Col>
    </Row>
  )
}

export default AuthPage
