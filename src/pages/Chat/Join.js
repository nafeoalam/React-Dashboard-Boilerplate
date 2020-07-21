import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { makeStyles } from '@material-ui/core/styles';
import './Chat.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "white"
  },
}));
export default function SignIn() {
  // const classes = useStyles();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>

          <Button
            variant="contained"
            color="primary"
            startIcon={<KeyboardVoiceIcon />}
            type="submit">
            Join In
        </Button>
          {/* <button className={'button mt-20'} type="submit">Join In</button> */}
        </Link>
      </div>
    </div>
  );
}