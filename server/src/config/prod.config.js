const devConfig = require("./dev.config")

// This uses all settings from the dev config and only modifies a few of them

module.exports = {
	...devConfig,
	server: {
		...devConfig.server,
		developerSSL: false
	}
}