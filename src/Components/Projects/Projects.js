import React from 'react';
import styles from './Projects.module.scss';
import zomato from '../../Images/projects/Zomato.png';
import organiser from '../../Images/projects/pro-organiser.jpg';
import FinancePortfolio from '../../Images/projects/FinancePortfolio.png';
import expenseTracker from '../../Images/projects/ExpenseTracker.png';
import FoodDeliveryApp from '../../Images/projects/FoodDevlieryApp.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      name: 'Food Order Application',
      description:
        "Built using Zomato API's to get freshest restaurant content." +
        ' One can search for avaible restaurants, cafes, etc. available near his location and can order it.' +
        ' This API searches for restaurants by name, cuisine, or location, a detailed information including ratings.' +
        ' HTML5 Geolocation API is used to automatically detect location.' +
        ' Restaurants can be sorted and filted by cuisine.',
      github: 'https://github.com/GA-Capstone-Team1/food-delivery-app',
      link: 'https://getyourfood.netlify.app/',
      stack: ['React', ' Material-ui', 'React-hooks', 'Redux', 'Firebase'],
      image: FoodDeliveryApp,
    },
    {
      name: 'Pro-organiser (Trello Clone)',
      description:
        'Pro organiser is an app where one can add tasks, assign team members to the task and track tasks progress. The created task can be moved/dragged between different lanes as per the progress.',
      github: 'https://github.com/OmkarK05/pro-organiser-app-redux',
      link: 'https://pro-organiser.netlify.app',
      stack: ['React', 'React-hooks', 'Redux', 'Firebase'],
      image: organiser,
    },
    {
      name: 'Expense Tracker',
      description:
        'Expense tracker is an appliation to track expenses. One can track his saving and expenses.',
      github: 'https://github.com/OmkarK05/Expense-Tracker-React-App',
      link: 'https://track-your-expenses.netlify.app',
      stack: ['React', 'React-hooks', 'Firebase'],
      image: expenseTracker,
    },
    {
      name: 'Finance Portfolio Tracker',
      description:
        'Financial portfolio tracker allows you to trace the movements of your individual holdings. You can see how your current allocation stacks up with your long-term goals and get an idea of how your portfolio is doing compared to the rest of the market. ',
      github: 'https://github.com/OmkarK05/financial-portfolio-tracker-app',
      link: 'https://OmkarK05.github.io/financial-portfolio-tracker-app/',
      stack: ['React', 'React-hooks', 'Redux', 'Firebase'],
      image: FinancePortfolio,
    },
    {
      name: 'Zomato Landing Page (static UI)',
      description: 'This is responsive UI of zomato landing page',
      github: 'https://github.com/OmkarK05/zomato-replica',
      link: 'https://OmkarK05.github.io/zomato-replica/',
      stack: ['HTML', 'CSS', 'SASS'],
      image: zomato,
    },
  ];
  return (
    <section id='projects'>
      <div className='section-heading-container'>
        <p className='section-heading'>Side Projects</p>
        <div className='line'></div>
      </div>
      <div className={styles['projects-container']}>
        {projects.map((project) => (
          <div key={project['name']} className={styles['project-container']}>
            <div className={styles['project-details']}>
              <div className={styles['project-header']}>
                <div className={styles.name}>{project['name']}</div>
                <div className={styles.description}>
                  {project['description']}
                </div>
              </div>
              <div className={styles['project-footer']}>
                <div className={styles.stack}>
                  <span className={styles.description}>Stack:</span>{' '}
                  {project['stack'].join(', ')}
                </div>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a
                      href={project['github']}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaGithub size='26' title='Github' />
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href={project['link']}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaExternalLinkAlt size='22' title='View Project' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['project-image']}>
              <img alt={project['name']} src={project['image']} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
