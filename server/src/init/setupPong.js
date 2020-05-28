const request = require("request-promise-native")
const promiseRouteHandler = require("../utils/promiseRouteHandler")
//const notAuthMiddleware = require("../utils/notAuthMiddleware")
//const { services } = require("../config/scopes")
const anorakTools = require("anorak-tools")

module.exports = (app, authConfig) => {
	app.get("/ping", promiseRouteHandler( async (req, res, next) => {
		try {
			let response = anorakTools.pong()
			res.send(response)
		} catch(error) {
			res.send(error)
		}
	}))
}