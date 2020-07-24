import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import { Grid, TextField } from '@material-ui/core';
import imageQR from "../../assets/img/payment/qrCode.png";

import useStyles from "./style";

function Payment() {
    const [merchantAddress, setMerchantAddress] = useState('Kolkata')
    const classes = useStyles();

    return (
        <Row
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Col md={8} lg={8} xs={12}>
                <Card body>
                    <div className={classes.root}>
                        <Paper elevation={3} className={classes.paper}>
                            <span className={classes.paperContent}>Payment</span>
                        </Paper>
                        <Row>
                            <Col md={6} lg={6} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <TextField
                                            label={'Merchant Address'}
                                            defaultValue=""
                                            helperText=""
                                            variant="outlined"
                                            onChange={(e) => setMerchantAddress('Chittagong')}
                                            style={{ width: '100%' }}
                                            {...merchantAddress}
                                        />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <TextField
                                            label={'Amount'}
                                            defaultValue=""
                                            helperText=""
                                            variant="outlined"
                                            onChange={(e) => setMerchantAddress('Chittagong')}
                                            style={{ width: '100%' }}
                                            {...merchantAddress}
                                        />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <TextField
                                            label={'Note'}
                                            defaultValue=""
                                            helperText=""
                                            variant="outlined"
                                            onChange={(e) => setMerchantAddress('Chittagong')}
                                            style={{ width: '100%' }}
                                            {...merchantAddress}
                                        />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <Button variant="contained" style={{ float: 'left' }}>Confirm</Button>
                                    </Grid>
                                </Grid>
                            </Col>
                            <Col md={6} lg={6} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <img src={imageQR} alt='QR Code' style={{
                                            'width': '20%'
                                        }} />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12}>
                                        <Button variant="contained" color="primary">
                                            Share
                                </Button>
                                    </Grid>
                                </Grid>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Payment
