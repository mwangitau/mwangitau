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

const GitHubProfileReadme = () => (
  <div style={styles.container}>
    <header style={styles.header}>
      <h1 style={styles.name}>John Gitau</h1>
      <h2 style={styles.title}>Software Engineer | ALX Student</h2>
    </header>

    <section style={styles.section}>
      <h3 style={styles.sectionTitle}>About Me</h3>
      <p>Hello! I'm John Gitau, a passionate software engineer and ALX student. I'm dedicated to mastering both low-level and high-level programming, with a focus on C, Python, and web technologies.</p>
    </section>

    <section style={styles.section}>
      <h3 style={styles.sectionTitle}>Featured Projects</h3>
      <div style={styles.project}>
        <a href="https://github.com/mwangitau/alx-low_level_programming" style={styles.projectName}>alx-low_level_programming</a>
        <p>A collection of C programming projects covering various low-level concepts.</p>
      </div>
      <div style={styles.project}>
        <a href="https://github.com/mwangitau/alx-system_engineering-devops" style={styles.projectName}>alx-system_engineering-devops</a>
        <p>Projects related to system engineering and DevOps practices.</p>
      </div>
    </section>

    <section style={styles.section}>
      <h3 style={styles.sectionTitle}>Skills</h3>
      <div>
        <div style={styles.skillCategory}>Programming Languages</div>
        <span style={styles.skillBadge}>C</span>
        <span style={styles.skillBadge}>Python</span>
        <span style={styles.skillBadge}>Shell Scripting</span>
      </div>
      <div>
        <div style={styles.skillCategory}>Web Development</div>
        <span style={styles.skillBadge}>HTML</span>
        <span style={styles.skillBadge}>CSS</span>
        <span style={styles.skillBadge}>JavaScript</span>
      </div>
    </section>
  </div>
);

module.exports = GitHubProfileReadme;
