import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useAuth } from '../utils/userContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const theme = createTheme();

export default function Update() {
    const { state } = useLocation();
    const { user } = useAuth()
    const navigate = useNavigate();
    const userId = user.id

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        goalType: state.goalType,
        goalName: state.goalName,
        startDate: state.startDate,
        endDate: state.endDate,
        repetition: state.repetition,
        complete: false
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/api/update/${state.goal_id}`, form, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': userId
                }
            });
            if (res.status === 201) {
                navigate('/goals');
            }
        } catch (err) {
            console.log(err.response.data);
            setError(true);
            setErrorMessage(err.response.data.message);
        }
    }

    async function handleInput(e) {
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
                                    name="goalType"
                                    label="Goal Type"
                                    id="goalType"
                                    autoFocus
                                    defaultValue={state.goalType}
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="goalName"
                                    label="Goal Name"
                                    id="goalName"
                                    autoFocus
                                    defaultValue={state.goalName}
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
                                    defaultValue={state.startDate}
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
                                    defaultValue={state.endDate}
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
                                    defaultValue={state.repetition}
                                    onChange={handleInput}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={handleSubmit}
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


