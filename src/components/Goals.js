import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
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
    console.log(userId);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            console.log('fetch', userId);
            const res = await axios.get('http://localhost:3001/api/goals', {
                method: 'GET',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': userId
                }
            })
            console.log(res);
            if (res.status === 200) {
                console.log('response', res.data.goals);
                setGoalsData(res.data.goals)
            }
        }
        fetchData()
    }, [])
    console.log(goals);
    const handleUpdate = () => {
        console.log('Update');
    }

    const handleDelete = () => {
        console.log('Delete');
    }

    const handleComplete = () => {
        console.log('Complete');
    }

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
                    Your goals
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Your personal goals. You can edit and delete and mark them complete.
                </Typography>
            </Container>

            <Container>
                <Grid container spacing={3}>
                    {goals.map((goal) => {
                        console.log('1 goal', goal.goalType);
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
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ mb: 1 }}>Goal: {goal.goalName}</Typography>
                                        <Typography variant="body1" sx={{ mb: 1 }}>Start date: {goal.startDate}</Typography>
                                        <Typography variant="body1" sx={{ mb: 1 }}>End date: {goal.endDate}</Typography>
                                        <Typography variant="body1" sx={{ mb: 1 }}>Repetition: {goal.repetition}</Typography>
                                        <Card>
                                    
                                        </Card>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button onClick={handleUpdate} sx={{ bgcolor: '#3E2C95' }} variant="contained">
                                        Update
                                    </Button>
                                    <Button onClick={handleDelete} sx={{ bgcolor: '#3E2C95' }} variant="contained">
                                        Delete
                                    </Button>
                                    <Button onClick={handleComplete} sx={{ bgcolor: '#3E2C95' }} variant="contained">
                                        Completed
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
