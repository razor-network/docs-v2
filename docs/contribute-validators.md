# Verify Validator on Razor Network

Welcome to the contributing guide for Razor Network's Validator Repository. We're thrilled you're here and are excited to collaborate with you. Contributing to this repository involves verifying validators to enhance the integrity and functionality of the Razor Network. As a contributor, you have the opportunity to showcase your custom name and image. This guide provides a comprehensive overview of how you can contribute in this specific manner. Thank you for your interest and commitment to making Razor Network even better!

### Prerequisites

- Active Validator on [Razor Network](https://razorscan.io)
- Official website
- Logo
- Installed software:
  - Node.js
  - Git
  - Any text editor like VS Code, Sublime Text, etc.

### Getting started

1. Fork the [Repository](https://github.com/razor-network/validators)

2. Remember to set `upstream` branch

```bash
git remote add upstream https://github.com/razor-network/validators.git
```

3. Images should be added to the appropriate folder (`/assets`) and should have all lowercase. Extension: `jpeg/jpg/png`.

4. Update the `chains/europa/validatorList.json`.

```bash
"${ValidatorId}": {
	    "address": "${Validator Address}",
	    "name": "${Custom Name}",
	    "Website": "${Official Website}",
	    "logo": "${Image Name.extension}"
	}
```

_Note: You must own the rights to any assets and websites presented._

5. Create a Pull Request to the `main` branch of the `upstream` respository.
