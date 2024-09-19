"use strict";

var React = require('react');
var styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0366d6'
  },
  title: {
    fontSize: '18px',
    color: '#586069'
  },
  section: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0366d6',
    marginBottom: '10px'
  },
  project: {
    marginBottom: '10px'
  },
  projectName: {
    fontWeight: 'bold',
    color: '#0366d6'
  },
  skillCategory: {
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  skillBadge: {
    display: 'inline-block',
    padding: '3px 7px',
    marginRight: '5px',
    backgroundColor: '#e1e4e8',
    borderRadius: '3px'
  }
};
var GitHubProfileReadme = function GitHubProfileReadme() {
  return /*#__PURE__*/React.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/React.createElement("header", {
    style: styles.header
  }, /*#__PURE__*/React.createElement("h1", {
    style: styles.name
  }, "John Gitau"), /*#__PURE__*/React.createElement("h2", {
    style: styles.title
  }, "Software Engineer | ALX Student")), /*#__PURE__*/React.createElement("section", {
    style: styles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: styles.sectionTitle
  }, "About Me"), /*#__PURE__*/React.createElement("p", null, "Hello! I'm John Gitau, a passionate software engineer and ALX student. I'm dedicated to mastering both low-level and high-level programming, with a focus on C, Python, and web technologies.")), /*#__PURE__*/React.createElement("section", {
    style: styles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: styles.sectionTitle
  }, "Featured Projects"), /*#__PURE__*/React.createElement("div", {
    style: styles.project
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/mwangitau/alx-low_level_programming",
    style: styles.projectName
  }, "alx-low_level_programming"), /*#__PURE__*/React.createElement("p", null, "A collection of C programming projects covering various low-level concepts.")), /*#__PURE__*/React.createElement("div", {
    style: styles.project
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/mwangitau/alx-system_engineering-devops",
    style: styles.projectName
  }, "alx-system_engineering-devops"), /*#__PURE__*/React.createElement("p", null, "Projects related to system engineering and DevOps practices."))), /*#__PURE__*/React.createElement("section", {
    style: styles.section
  }, /*#__PURE__*/React.createElement("h3", {
    style: styles.sectionTitle
  }, "Skills"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: styles.skillCategory
  }, "Programming Languages"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "C"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "Python"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "Shell Scripting")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: styles.skillCategory
  }, "Web Development"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "HTML"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "CSS"), /*#__PURE__*/React.createElement("span", {
    style: styles.skillBadge
  }, "JavaScript"))));
};
module.exports = GitHubProfileReadme;