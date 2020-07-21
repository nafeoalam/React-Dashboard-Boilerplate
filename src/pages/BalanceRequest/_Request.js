import React from 'react'
import { Card, Col, Row, Button } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import imageQR from "../../assets/img/payment/qrCode.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            // height: theme.spacing(6),
            'text-align': 'center'
        },
    },
    paper: {
        display: 'table',
        height: '48px'
    },
    paperContent: {
        'display': 'table-cell',
        'vertical-align': 'middle'
    }
}));

function Request() {
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
                            <span className={classes.paperContent}>Balance Request</span>
                        </Paper>

                        <Grid container spacing={3}>
                            <Grid item md={12} lg={12} xs={12}>
                                <img src={imageQR} alt='QR Code' style={{
                                    'width': '40%'
                                }} />
                            </Grid>
                            <Grid item md={12} lg={12} xs={12}>
                                <Button variant="contained" color="primary">
                                    Share
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Request
