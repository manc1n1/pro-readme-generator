function renderDescription(description) {
	const descriptionRender = `## Description
  ${description}`;

	if (description === '') return '';
	else return descriptionRender;
}

function renderInstallation(installation) {
	const installationRender = `## Installation
  ${installation}`;

	if (installation === '') return '';
	else return installationRender;
}

function renderUsage(usage) {
	const usageRender = `## Usage
  ${usage}`;

	if (usage === '') return '';
	else return usageRender;
}

function renderContribute(contribute) {
	const contributeRender = `## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request`;

	if (contribute === 'No') return '';
	else return contributeRender;
}

function renderLicenseBadge(data, license) {
	const licenseBadge = `https://img.shields.io/github/license/${data.github}/${data.title}.svg?style=for-the-badge`;

	if (license !== 'None') return licenseBadge;
	else return '';
}

function renderLicenseLink(data, license) {
	const licenseLink = `https://github.com/${data.github}/${data.title}/blob/${data.branch}/LICENSE`;

	if (license !== 'None') return licenseLink;
	else return '';
}

function renderLicenseSection(data, license) {
	const licenseRender = `## License
  [![License](${renderLicenseBadge(data, license)})](${renderLicenseLink(
		data,
		license,
	)})
  `;

	if (license !== 'None') return licenseRender;
	else return '';
}

function generateMarkdown(data) {
	return `# ${data.title}
  
  ${renderDescription(data.description)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ${renderInstallation(data.installation)}
  
  ${renderUsage(data.usage)}
  
  ${renderLicenseSection(data, data.license)}

  ${renderContribute(data.contribute)}

  ## Questions
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
