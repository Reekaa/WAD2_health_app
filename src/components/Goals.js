import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/userContext';
import axios from 'axios';

export default function Goals() {
    const { user } = useAuth()
    const userId = user.id
    const [goals, setGoalsData] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3001/api/goals', {
                method: 'GET',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': userId
                }
            })
            if (res.status === 200) {
                setGoalsData(res.data.goals)
            }
        }
        fetchData()
    }, [userId])

    async function handleDelete(goal_id) {
        try {
            const res = await axios.delete(`http://localhost:3001/api/delete/${goal_id}`, {
                method: 'DELETE',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': userId
                }
            })
            if (res.status === 201) {
                navigate('/mainpage')
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    async function handleComplete(goal_id, goalName, goalType, startDate, endDate, repetition, complete) {
        const updateFrom = {
            goalName: goalName,
            goalType: goalType,
            startDate: startDate,
            endDate: endDate,
            repetition: repetition,
            complete: complete
        }
        try {
            const res = await axios.post(`http://localhost:3001/api/update/${goal_id}`, updateFrom, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': userId
                }
            });
            if (res.status === 201) {
                navigate('/achievements');
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <React.Fragment>
            <Typography component="h1" variant="h5" sx={{ mb: 4, color: '#b32000' }}>
                {errorMessage}
            </Typography>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container disableGutters component="main" sx={{ pt: 4, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Your goals
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Your personal goals. You can edit and delete and mark them complete.
                </Typography>
            </Container>

            <Container>
                <Grid container spacing={3}>
                    {goals.map((goal) => {
                        if (!goal.complete) {
                            return (
                                <Grid key={goal.goal_id} item xs={4}>
                                    <Card style={{ backgroundColor: "#E9E7EF", display: 'flex', justiyContent: 'space-between', flexDirection: 'column' }}>
                                        <CardHeader
                                            title={goal.goalType}
                                            sx={{ textAlign: 'center' }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    mb: 2
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ mb: 1, justifyContent: 'center' }}>Goal: {goal.goalName}</Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>Start date: {goal.startDate}</Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>End date: {goal.endDate}</Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>Repetition: {goal.repetition}</Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button
                                                onClick={() => navigate('/update', { state: { goal_id: goal.goal_id, goalName: goal.goalName, goalType: goal.goalType, startDate: goal.startDate, endDate: goal.endDate, repetition: goal.repetition, complete: goal.complete } })}
                                                sx={{ bgcolor: '#3E2C95' }}
                                                variant="contained"
                                            >
                                                Update
                                            </Button>
                                            <Button onClick={() => handleDelete(goal.goal_id)} sx={{ bgcolor: '#3E2C95' }} variant="contained">
                                                Delete
                                            </Button>
                                            <Button onClick={() => handleComplete(goal.goal_id, goal.goalName, goal.goalType, goal.startDate, goal.endDate, goal.repetition, true)} sx={{ bgcolor: '#3E2C95' }} variant="contained">
                                                Complete
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
