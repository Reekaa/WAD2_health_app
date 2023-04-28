import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/userContext';
import axios from 'axios';

export default function Achievements({ }) {
    const { user } = useAuth()
    const userId = user.id
    const [goals, setGoalsData] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

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
    }, [])


    return (
        <React.Fragment>
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
                    Achievements
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Your personal achievements.
                </Typography>
            </Container>

            <Container>
                <Grid container spacing={3}>
                    {goals.map((goal) => {
                        if (goal.complete) {
                            return (
                                <Grid item xs={4}>
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
                                                <Typography variant="body1" sx={{ mb: 1 }}>Completed: Yes</Typography>
                                            </Box>
                                        </CardContent>
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
