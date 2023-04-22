import React from 'react';
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

export default function MainPage() {

const navigate = useNavigate();

const routeChange = () => {
    navigate('/create');
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
                Set and track your goals
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Set personal goals in any of the three categories below. You will be able to add, edit and delete goals. 
            </Typography>
        </Container>

        <Container>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card style={{backgroundColor: "#E9E7EF", minHeight: '29vw', display:'flex', justiyContent:'space-between', flexDirection:'column'}}>
                        <CardHeader
                            title="Nutrition"
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
                            <Typography variant="body1" sx={{ mb: 1 }}>If you want to give a certain area of your health a boost or just generally want to feel a little better you can set nutritional goals here.</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>For example ListItemText'Drink more water', 'Meal prep for the week ahead', 'Go booze free'.</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>These changes can effect your health and overal well being.</Typography>
                            <Card>

                            </Card>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', mb: 2 }}> 
                            <Button onClick={routeChange} sx={{ bgcolor: '#3E2C95' }} variant="contained" endIcon={<AddIcon />}>
                                Add new goal
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{backgroundColor: "#E9E7EF", minHeight: '29vw'}}>
                    <CardHeader
                            title="Fitness"
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
                            <Typography variant="body1" sx={{ mb: 1 }}>Whether you're looking to maintain a consistent workout routine, improve your endurance, or build muscle, there's a goal for everyone no matter your fitness level.</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>The key to setting yourself up for fitness goal success is devising them with the SMART method in mind.</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>Specific - Measurable - Attainable - Relevant - Timely</Typography>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', mb: 2 }}> 
                            <Button onClick={routeChange} sx={{ bgcolor: '#3E2C95' }} variant="contained" endIcon={<AddIcon />}>
                                Add new goal
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{backgroundColor: "#E9E7EF", minHeight: '29vw'}}>
                    <CardHeader
                            title="Healthy Lifestyle"
                            sx={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Box
                                sx={{
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                    mb: 2,
                                }}
                            >  
                            <Typography variant="body1" sx={{ mb: 1 }}>Maintaining optimal health is not only good for your well-being, it also affects your ability to achieve your other goals..</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>Integrating self-care into your life, staying on top of your mental health, and getting adequate sleep are could help to become the best version of yourself.</Typography>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', mb: 2 }}> 
                            <Button onClick={routeChange} sx={{ bgcolor: '#3E2C95' }} variant="contained" endIcon={<AddIcon />}>
                                Add new goal
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
);
}
