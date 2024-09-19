const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const GitHubProfileReadme = require('./src/GitHubProfileReadme');

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(GitHubProfileReadme));

const markdown = `
# John Gitau's GitHub Profile

<div align="center">

${html}

</div>

---

<div align="center">

*This README is automatically generated using React and GitHub Actions. [See the source code](https://github.com/mwangitau/mwangitau)*

</div>
`;

fs.writeFileSync('README.md', markdown);
