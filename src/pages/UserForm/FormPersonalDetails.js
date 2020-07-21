import React from 'react';
import { TextField } from '@material-ui/core';
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

function FormPersonalDetails() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Box className={classes.box}>
                        <TextField
                            label="Auto Generated Seed"
                            defaultValue={''}
                            helperText=""
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormPersonalDetails
