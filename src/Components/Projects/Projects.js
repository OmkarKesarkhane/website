import React from 'react';
import styles from './Projects.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import zomato from '../../Images/projects/Zomato.png';
import organiser from '../../Images/projects/pro-organiser.jpg';
import FinancePortfolio from '../../Images/projects/FinancePortfolio.png';
import expenseTracker from '../../Images/projects/ExpenseTracker.png';
import FoodDeliveryApp from '../../Images/projects/FoodDevlieryApp.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    boxShadow: 3,
    margin: 10,
  },
  media: {
    height: 180,
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <div className={styles.skillsWrapper}>
        <p className={styles.skills}>Projects</p>
        <p className={styles.line}></p>
      </div>
      <div className={styles.desktop}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={FoodDeliveryApp}
              title='Food Order Application'
              style={{ height: 200 }}
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='h2'>
                Food Order Application
              </Typography>
              <Typography variant='body3' color='textSecondary' component='p'>
                stack : React, Material-ui, React-hooks, Redux, Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://getyourfood.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View
              </a>
            </Button>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://github.com/GA-Capstone-Team1/food-delivery-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Github
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={zomato}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='h2'>
                Zomato Landing Page (static)
              </Typography>
              <Typography variant='body3' color='textSecondary' component='p'>
                It is Responsive web design of Zomato Landing page.<br></br>{' '}
                stack : HTML, CSS, SASS
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://OmkarK05.github.io/zomato-replica/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View{' '}
              </a>
            </Button>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://github.com/OmkarK05/zomato-replica'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Github
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={FinancePortfolio}
              title='Finance Portfolio'
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='h2'>
                Finance Portfolio Application
              </Typography>
              <Typography variant='body3' color='textSecondary' component='p'>
                stack: React, Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://OmkarK05.github.io/financial-portfolio-tracker-app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View
              </a>
            </Button>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://github.com/OmkarK05/financial-portfolio-tracker-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Github
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={organiser}
              title='pro-organiser'
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='h2'>
                Pro-Organiser
              </Typography>

              <Typography variant='body3' color='textSecondary' component='p'>
                Web App with authentication, creating, updating, deleting tasks
                & members. <br></br>Stack : React, Redux, Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://pro-organiser.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                View
              </a>
            </Button>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://github.com/OmkarK05/pro-organiser-app-redux'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Github
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={expenseTracker}
              title='Expense Tracker'
              style={{ height: 200 }}
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='h2'>
                Expense Tracker Application
              </Typography>
              <Typography variant='body3' color='textSecondary' component='p'>
                stack : React, React-hooks, Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://track-your-expenses.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                View
              </a>
            </Button>
            <Button size='medium' color='primary'>
              <a
                style={{ textDecoration: 'none' }}
                href='https://github.com/OmkarK05/Expense-Tracker-React-App'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Github
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
