import React, { useState, Fragment } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    button: {
        color: theme.palette.text.secondary
    }
}));


function UserForm() {
    const classes = useStyles();
    const [step, setStep] = useState(1);
    const history = useHistory();


    const StepButtons = (props) => (
        <React.Fragment>
            <Grid item xs={4}>
                {props.value !== 'initial' ?
                    <Button variant="outlined" className={classes.button} onClick={(e) => previousStep(e)}>Back</Button> :
                    <Button variant="outlined" className={classes.button} onClick={(e) => reGenerate(e)}>Re-generate</Button>
                }
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
                {
                    props.value === 'confirm' ?
                        <Button variant="outlined" className={classes.button} style={{ float: "right" }} onClick={(e) => confirm(e)}>Confirm</Button> :
                        props.value !== 'final' ?
                            <Button variant="outlined" className={classes.button} style={{ float: "right" }} onClick={(e) => nextStep(e)}>Continue</Button> :
                            null
                }
            </Grid>
        </React.Fragment>

    );
    const nextStep = (e) => {
        e.preventDefault();
        setStep(prevState => prevState + 1)
    }
    const previousStep = (e) => {
        e.preventDefault();
        setStep(prevState => prevState - 1)
    }
    const reGenerate = (e) => {
        e.preventDefault();
    }
    const confirm = (e) => {
        history.push('/')
    }


    switch (step) {
        case 1:
            return (
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <FormUserDetails values={{ step }} />
                        </Grid>
                        <Grid container item xs={12}>
                            <StepButtons value='initial' />
                        </Grid>
                    </Grid>
                </div>
            )
        case 2:
            return (
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <FormPersonalDetails values={{ step }} />
                        </Grid>
                        <Grid container item xs={12}>
                            <StepButtons value='confirm' />
                        </Grid>
                    </Grid>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>{step}</h1>
                    <Confirm />
                    <StepButtons />
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>{step}</h1>
                    <Success />
                    <StepButtons value='final' />
                </div>
            )
        default:
            return (
                <div>
                    <h1>Not Found</h1>
                </div>
            )
    }
}
export default UserForm
