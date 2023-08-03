// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data, license) {
	const licenseBadge = `https://img.shields.io/github/license/${data.github}/${data.title}.svg?style=for-the-badge`;

	if (license !== 'None') return licenseBadge;
	else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, license) {
	const licenseLink = `https://github.com/${data.github}/${data.title}/blob/${data.branch}/LICENSE`;

	if (license !== 'None') return licenseLink;
	else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data, license) {
	const licenseRender = `
  ## Badges
  [![License](${renderLicenseBadge(data, license)})](${renderLicenseLink(
		data,
		license,
	)})
  `;

	if (license !== 'None') return licenseRender;
	else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
  ${renderLicenseSection(data, data.license)}
`;
}

module.exports = generateMarkdown;
