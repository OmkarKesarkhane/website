import React from 'react';
import styles from './Projects.module.scss';
// import zomato from '../../Images/projects/Zomato.png';
import organiser from '../../Images/projects/pro-organiser.jpg';
// import FinancePortfolio from '../../Images/projects/FinancePortfolio.png';
// import expenseTracker from '../../Images/projects/ExpenseTracker.png';
import FoodDeliveryApp from '../../Images/projects/FoodDevlieryApp.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      name: 'Food Order Application',
      description:
        'Pro organiser is an app where one can add tasks, assign team members to the task and track task progress. The created task can be moved/dragged between different lanes as per the progress. The created task can be moved/dragged between different lanes as per the progress The created task can be moved/dragged between different lanes as per the progress The created task can be moved/dragged between different lanes as per the progress',
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
                    <FaGithub size='26' title='Github' />
                  </div>
                  <div className={styles.link}>
                    <FaExternalLinkAlt size='22' title='View Project' />
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
