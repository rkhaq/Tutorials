import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Router from 'next/router';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'loggedOut',
  states: {
    loggedOut: {
      on: { TOGGLE: 'loggedIn' },
    },
    loggedIn: {
      on: { TOGGLE: 'loggedOut' },
    },
  },
});

function Login() {
  const classes = useStyles();

  const [csrfToken, setcsrf] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [state, send] = useMachine(toggleMachine);

  React.useEffect(() => {
    fetch('http://localhost:8000/account/csrf/', { credentials: 'include' })
      .then((res) => {
        let token = res.headers.get('X-CSRFToken');
        setcsrf(token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:8000/account/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      credentials: 'include',
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Connecting problem');
        }
      })
      .then((data) => {
        console.log(data);
        send('TOGGLE');
        // Router.push('/dashboard');
      })
      .catch((err) => {
        setError('Username or password Incorrect');
      });
  }

  console.log(state.value);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>{error}</div>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate="noValidate"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Login;
