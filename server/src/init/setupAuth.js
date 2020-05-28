const { MemoryStore } = require("express-session")
const { setupWebAppAuth } = require("@veracity/node-auth")

module.exports = (app, config) => {
	const settings = {
		app,
		strategy: {
			clientId: config.clientID,
			clientSecret: config.clientSecret,
			replyUrl: config.replyUrl,
		},
		session: {
			secret: "609E5171-E2E0-45C2-A68D-3E2AC08DF556",
			store: new MemoryStore()
		}
	}
	setupWebAppAuth(settings)
}