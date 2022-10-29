import React from 'react';
import styles from './Experience.module.scss';

function Header({ routes }) {
  const experiences = [
    {
      company: 'Vphrase Analytics Solutions Pvt Ltd, Mumbai.',
      position: 'Frontend Engineer',
      started: 'OCT 2020 - Present  ( 2 years 1 month )',
      ended: 'Present',
      company_description:
        'Vphrase is Business Analytics based startup. They offers two tools Phrazor and Explorazor.',
      job_description: [
        'Developed, handled and maintained highlevel core modules of product with Vue.js.',
        'Lead and maintained frontend from last 7 months.',
        'Lead UI revamp/redesign of product, which increased the user engagement, experience and overall asthetic of the product.',
        'Work closely with designers and product managers to deliver solutions quickly.',
        'Did code reviews of peers.',
        'Implemented Unit/Integration testing from scratch.',
        'Created custom data visualization elements/components using SVG',
      ],
    },
    {
      company: 'GreyAtom Edutech Pvt. Ltd, Mumbai.',
      position: 'Frontend Development Internship',
      started: 'Dec 2019 - Aug 2020  ( 9 months )',
      ended: 'Aug 2020',
      company_description:
        'Vphrase is Business Analytics based startup. They offers two tools Phrazor and Explorazor.',
      job_description: [
        'In this internship learned HTML5, CSS3, SASS, SCSS, Javascript, React.js, React-hooks, Redux, Firebase,  Jest and Enzyme.',
        'Built 6 projects using above technologies, few of them have mentioned below.',
        'Pro Organiser ( Trello Clone )',
        'Food Order Application',
      ],
    },
  ];
  return (
    <section id='experience'>
      <div className='section-heading-container'>
        <p className='section-heading'>Experience</p>
        <div className='line'></div>
      </div>
      <div className={styles['experience-container']}>
        {experiences.map((experience) => (
          <div key={experience['company']} className={styles.experience}>
            <div className={styles.circle} />
            <div className={styles.line} />
            <div className={styles['job-title']}>
              <span className={styles.position}>{experience['position']}</span>
              <span className={styles.company}> @ {experience['company']}</span>
            </div>
            <p className={styles['duration']}>{experience['started']}</p>
            <ul className={styles['job-description']}>
              {experience['job_description'].map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Header;
