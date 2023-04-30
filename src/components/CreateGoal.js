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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/userContext';

const theme = createTheme();

export default function CreateGoal() {
    const { user } = useAuth()
    const userId = user.id
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        goalType: '',
        goalName: '',
        startDate: '',
        endDate: '',
        repetition: '',
        complete: false
    });
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (form.goalType === null || form.goalName === null || form.startDate === null || form.endDate === null) {
            setErrorMessage('Information is missing');
        } else {
            try {
                const res = await axios.post('http://localhost:3001/api/create', form, {
                    method: 'POST',
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': userId
                    }
                });
                if (res.status === 201) {
                    navigate('/goals', {
                        message: 'Your goal has been created',
                    });
                }
            } catch (err) {
                setErrorMessage(err.response.data.message);
            }
        }
    }

    function handleChange(e) {
        e.preventDefault();
        setForm({
            ...form,
            goalType: e.explicitOriginalTarget.outerText
        });
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
                    <Typography sx={{ p: 1, color: "red" }}>{errorMessage}</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Goal Type</InputLabel>
                                <Select
                                    label="Goal Type"
                                    onChange={handleChange}
                                    sx={{ minWidth: 400 }}
                                >
                                    <MenuItem value={10}>Fitness</MenuItem>
                                    <MenuItem value={20}>Nutrition</MenuItem>
                                    <MenuItem value={30}>Healthy Lifestyle</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="goalName"
                                    label="Goal Name"
                                    id="goalName"
                                    autoFocus
                                    autoComplete="goalName"
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


