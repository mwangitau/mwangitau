const React = require('react');

const styles = {
  container: { fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' },
  header: { textAlign: 'center', marginBottom: '20px' },
  name: { fontSize: '24px', fontWeight: 'bold', color: '#0366d6' },
  title: { fontSize: '18px', color: '#586069' },
  section: { marginBottom: '20px' },
  sectionTitle: { fontSize: '20px', fontWeight: 'bold', color: '#0366d6', marginBottom: '10px' },
  project: { marginBottom: '10px' },
  projectName: { fontWeight: 'bold', color: '#0366d6' },
  skillCategory: { fontWeight: 'bold', marginBottom: '5px' },
  skillBadge: { display: 'inline-block', padding: '3px 7px', marginRight: '5px', backgroundColor: '#e1e4e8', borderRadius: '3px' }
};

const GitHubProfileReadme = () => 
  React.createElement('div', { style: styles.container }, 
    React.createElement('header', { style: styles.header }, 
      React.createElement('h1', { style: styles.name }, 'John Gitau'),
      React.createElement('h2', { style: styles.title }, 'Developer | Data Enthusiast')
    ),
    React.createElement('section', { style: styles.section }, 
      React.createElement('h3', { style: styles.sectionTitle }, 'About Me'),
      React.createElement('p', null, " Hi there, I'm John Mwangi! 👋
I'm a Developer with a background in Applied Statistics and IT. I love building web applications and exploring cloud computing. Currently, I'm working and Learning some exciting projects using Flutter, HTML, CSS, and JavaScript!")
    ),
    React.createElement('section', { style: styles.section }, 
      React.createElement('h3', { style: styles.sectionTitle }, 'Featured Projects'),
      React.createElement('div', { style: styles.project }, 
        React.createElement('a', { href: 'https://github.com/mwangitau/alx-low_level_programming', style: styles.projectName }, 'alx-low_level_programming'),
        React.createElement('p', null, 'A collection of C programming projects covering various low-level concepts.')
      ),
      React.createElement('div', { style: styles.project }, 
        React.createElement('a', { href: 'https://github.com/mwangitau/alx-system_engineering-devops', style: styles.projectName }, 'alx-system_engineering-devops'),
        React.createElement('p', null, 'Projects related to system engineering and DevOps practices.')
      )
    ),
    React.createElement('section', { style: styles.section }, 
      React.createElement('h3', { style: styles.sectionTitle }, 'Skills'),
      React.createElement('div', null, 
        React.createElement('div', { style: styles.skillCategory }, 'Programming Languages'),
        React.createElement('span', { style: styles.skillBadge }, 'C'),
        React.createElement('span', { style: styles.skillBadge }, 'Python'),
        React.createElement('span', { style: styles.skillBadge }, 'Shell Scripting')
      ),
      React.createElement('div', null, 
        React.createElement('div', { style: styles.skillCategory }, 'Web Development'),
        React.createElement('span', { style: styles.skillBadge }, 'HTML'),
        React.createElement('span', { style: styles.skillBadge }, 'CSS'),
        React.createElement('span', { style: styles.skillBadge }, 'JavaScript')
      )
    )
  );

module.exports = GitHubProfileReadme;
