const tokens = require("./tokens")
const path = require("path")

module.exports = {
	server: {
		// Configure the port or named pipe the server should listen for connections on.
		// process.env.PORT tries to resolve the port or pipe from the environment.
		// It should work out of the box for Azure AppServices or IIS running IISNode.
		portOrPipe: process.env.PORT || 3000,

		// This setting enables automatic generation of SSL certificates for development mode.
		// You should disable this setting in production.
		developerSSL: true,

		// The directory where log files are created. Note the process MUST have write permissions to this directory.
		logDir: path.resolve(__dirname, "../../logs"),

		// This is the folder where static assets (the client) should be served from.
		staticRoot: path.resolve(__dirname, "../dist")
	},
	auth: {
		...tokens,
		sessionSecret: "bd9d648a-b2ba-46a6-a760-30e316ec899b", // The secret used by express-session. You should re-generate this for your environments.
		tenantID: "a68572e3-63ce-4bc1-acdc-b64943502e9d",
		policyName: "B2C_1A_SignInWithADFSIdp",
		scope: "https://dnvglb2cprod.onmicrosoft.com/83054ebf-1d7b-43f5-82ad-b2bde84d7b75/user_impersonation", // Request access token for Veracity Service API and returns the access_token.
		containers: {}
	},
	apiKeys: {
		myServices: tokens.apiKeys,
	}	
}