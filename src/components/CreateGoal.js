import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function MainPage() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        goal: '',
        startDate: '',
        endDate: '',
        repetition: '',
        username: 'Claudiu'
    });

    const navigate = useNavigate();

    const routeChange = () => {
      navigate('/register');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
        if (form.goal === null || form.startDate === null || form.endDate === null) {
            setError(true);
            setErrorMessage('Information is missing');
        } else {
            try {
                const res = await axios.post('http://localhost:3001/api/v1/create', form, { 
                    method: 'POST',
                    withCredentials: true,
                    headers: {
                    "Content-Type": "application/json"
                  }});
                if (res.status === 201) {
                    navigate('/mainpage', {
                        message: 'Your goal has been created',
                    });
                }
            } catch (err) {
                console.log(err.response.data);
                setError(true);
                setErrorMessage(err.response.data.message);
            }
        }
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
                        <AddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Goal
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
                                Create
                            </Button>
                        </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}


