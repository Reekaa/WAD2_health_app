import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../images/jared-rice-NTyBbu66_SI-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Reka Forgacs
            </Link>{' '}
            {2023}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    //   const { status, setStatus } = useToken('status');

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/api/login', form, {
                withCredentials: true,
            });
            if (res.status === 200) {
                // setStatus('logged-in');
                navigate('/');
            }
        } catch (err) {
            console.log('error', err);
            setError(true);
            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    {error && { errorMessage }}
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#3E2C95' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={handleInput}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#3E2C95' }}
                            >
                                Login
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// // import { redirect } from 'react-router-dom';
// // import useToken from '../utils/useToken';
// import { useNavigate } from 'react-router-dom';


// function Login() {
//   const [form, setForm] = React.useState({
//     username: '',
//     password: '',
//   });
//   const [error, setError] = React.useState(false);
//   const [errorMessage, setErrorMessage] = React.useState('');
//   const navigate = useNavigate();
// //   const { status, setStatus } = useToken('status');

//   function handleInput(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3001/api/login', form, {
//         withCredentials: true,
//       });
//       if (res.status === 200) {
//         // setStatus('logged-in');
//         navigate('/');
//       }
//     } catch (err) {
//       console.log('error', err);
//       setError(true);
//       setErrorMessage(err.response.data.message);
//     }
//   }

// //   if (status === 'logged-in') {
// //     return <Redirect to="/" />;
// //   }

//   return (
//     <StyledBox>
//       {error && <StyledError>{errorMessage}</StyledError>}
//       <StyledForm onSubmit={handleSubmit}>
//         <h1 style={{ marginTop: 0 }}>Login</h1>
//         <label htmlFor="username">Username</label>
//         <StyledInput
//           type="text"
//           id="username"
//           name="username"
//           onChange={handleInput}
//           value={form.username}
//         />
//         <label htmlFor="password">Password</label>
//         <StyledInput
//           type="password"
//           id="password"
//           name="password"
//           onChange={handleInput}
//           value={form.password}
//         />
//         <StyledButton type="submit">Login</StyledButton>
//       </StyledForm>
//     </StyledBox>
//   );
// }

// export default Login;

