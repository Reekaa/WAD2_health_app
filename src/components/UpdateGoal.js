import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Typography from '@mui/material/Typography';

const theme = createTheme();

export default function MainPage() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        goal: '',
        startDate: '',
        endDate: '',
        repetition: '',
    });

    async function handleSubmit(e) {
        console.log(e)
        // e.preventDefault();
        // if (form.password !== form.confirm) {
        //     setError(true);
        //     setErrorMessage('Password not match');
        // } else {
        //     try {
        //         const res = await axios.post(
        //             'http://localhost:3001/api/register',
        //             form,
        //         );
        //         if (res.status === 201) {
        //             navigate('/', {
        //                 message: 'Your account has been created now you can login now',
        //             });
        //         }
        //     } catch (err) {
        //         console.log(err.response.data);
        //         setError(true);
        //         setErrorMessage(err.response.data.message);
        //     }
        // }
    }

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

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
                        <ChangeCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update Goal
                    </Typography>
                    {error && <Typography sx={{ p: 1, color: "red" }}>{errorMessage}</Typography>}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="goal"
                                        label="Goal"
                                        id="foal"
                                        autoFocus
                                        autoComplete="goal"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="startDate"
                                        label="Start date"
                                        type="startDate"
                                        id="startDate"
                                        // autoComplete="new-password"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="endDate"
                                        label="End date"
                                        type="endDate"
                                        id="endDate"
                                        // autoComplete="confirm-password"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="repetition"
                                        label="Repetition"
                                        type="repetition"
                                        id="repetition"
                                        // autoComplete="confirm-password"
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
                                Update
                            </Button>
                        </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}


