import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            flexGrow: 1,
            margin: theme.spacing(1),
            width: "100%"
        }
    },
    box: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));
function FormUserDetails(props) {
    const classes = useStyles();

    const { step } = props.values;
    const [firstName, setFirstName] = useState('Dog Cat');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [Bio, setBio] = useState('');
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Box className={classes.box}>
                        <TextField
                            label="Auto Generated Seed"
                            defaultValue={firstName}
                            helperText=""
                            variant="outlined"
                            fullWidth
                            disabled
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormUserDetails
