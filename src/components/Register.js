import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Register() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirm: '',
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (form.password !== form.confirm) {
            setErrorMessage('Passwords do not match');
        } else {
            try {
                const res = await axios.post(
                    'http://localhost:3001/api/register',
                    form,
                );
                if (res.status === 201) {
                    navigate('/login', {
                        message: 'Your account has been created now you can login now',
                    });
                }
            } catch (err) {
                console.log(err.response);
                setErrorMessage(err.response.data.message);
            }
        }
    }
    console.log(errorMessage);
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#3E2C95' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Typography sx={{ p: 1, color:"red" }}>{errorMessage}</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="username"
                                    label="Username"
                                    id="username"
                                    autoFocus
                                    autoComplete="username"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="confirm-password"
                                    onChange={handleInput}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#3E2C95' }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2" color='#3E2C95'>
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const StyledBox = styled.div`
//   border: 1px solid #09d3ac;
//   border-radius: 5px;
//   width: fit-content;
//   margin: 2rem auto;
//   padding: 2rem;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0 2.5rem;
//   color: #09d3ac;
// `;

// const StyledInput = styled.input`
//   margin: 0 0 1rem 0;
//   padding: 3px 0;
// `;

// const StyledButton = styled.button`
//   padding: 10px;
//   background-color: transparent;
//   border-color: #09d3ac;
//   border-radius: 5px;
//   color: #09d3ac;
// `;

// const StyledError = styled.div`
//   padding: 1rem;
//   margin-bottom: 1rem;
//   border: 1px solid red;
//   border-radius: 5px
//   color: #09d3ac;
// `;

// function Register() {
//   const [form, setForm] = useState({
//     username: '',
//     password: '',
//     confirm: '',
//   });
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   function handleInput(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (form.password !== form.confirm) {
//       setError(true);
//       setErrorMessage('Password not match');
//     } else {
//       try {
//         const res = await axios.post(
//           'http://localhost:3001/api/register',
//           form,
//         );
//         if (res.status === 201) {
//           navigate('/', {
//             message: 'Your account has been created now you can login',
//           });
//         }
//       } catch (err) {
//         setError(true);
//         setErrorMessage(err.response.data.message);
//       }
//     }
//   }
//   console.log(
//     error,
//     errorMessage
//   );
//   return (
//     <StyledBox>
//       {error && <StyledError>{errorMessage}</StyledError>}
//       <StyledForm onSubmit={handleSubmit}>
//         <h1 style={{ marginTop: 0 }}>Register</h1>
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
//         <label htmlFor="confirm">Confirm Password</label>
//         <StyledInput
//           type="password"
//           id="confirm"
//           name="confirm"
//           onChange={handleInput}
//           value={form.confirm}
//         />
//         <StyledButton type="submit">Register</StyledButton>
//       </StyledForm>
//     </StyledBox>
//   );
// }

// export default Register;
