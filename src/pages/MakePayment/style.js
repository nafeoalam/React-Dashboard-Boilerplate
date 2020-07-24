import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles